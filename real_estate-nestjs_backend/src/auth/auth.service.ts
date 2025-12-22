import {
  Injectable,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { randomBytes } from 'crypto';
import type { JWTPayload } from './interfaces/jwt-payload.interface';
import { ResponseWithIdAndMessage } from '../common/interfaces/response.interface';
@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  private handleFailure(context: string, error: unknown): never {
    const message = error instanceof Error ? error.message : String(error);
    this.logger.error(`${context}: ${message}`);

    if (
      error instanceof BadRequestException ||
      error instanceof NotFoundException
    ) {
      throw error;
    }

    throw new InternalServerErrorException(context);
  }

  private hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  private verifyPassword(plain: string, hashed: string) {
    return bcrypt.compare(plain, hashed);
  }

  private createAccessToken(id: number, email: string) {
    return this.jwtService.signAsync({ sub: id, email });
  }

  private createRefreshToken(id: number, email: string) {
    return this.jwtService.signAsync({ sub: id, email }, { expiresIn: '7d' });
  }

  private async storeRefreshToken(userId: number, refreshToken: string) {
    const hashed = await bcrypt.hash(refreshToken, 10);

    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: hashed },
    });
  }

  private async refreshTokenMatches(raw: string, stored: string | null) {
    if (!stored) return false;
    return bcrypt.compare(raw, stored);
  }

  async register(data: RegisterDto): Promise<ResponseWithIdAndMessage> {
    try {
      const existing = await this.prisma.user.findFirst({
        where: {
          OR: [{ email: data.email }, { userName: data.userName }],
        },
        select: {
          id: true,
          email: true,
          userName: true,
        },
      });

      if (existing) {
        if (existing.email === data.email) {
          throw new BadRequestException('This email is already registered.');
        }
        if (existing.userName === data.userName) {
          throw new BadRequestException('This username is already taken.');
        }
      }

      const hashedPassword = await this.hashPassword(data.password);

      const newUser = await this.prisma.user.create({
        data: {
          email: data.email,
          userName: data.userName,
          name: data.name,
          password: hashedPassword,
        },
        select: {
          id: true,
        },
      });

      this.logger.log(`New user registered: ${newUser.id}`);

      return { id: newUser.id, message: 'New user registered' };
    } catch (error) {
      this.handleFailure('Registration failed', error);
    }
  }

  async login(data: LoginDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email: data.email },
        select: {
          id: true,
          email: true,
          name: true,
          password: true,
        },
      });

      if (!user) throw new BadRequestException('Invalid email or password.');

      const isValid = await this.verifyPassword(data.password, user.password);

      if (!isValid) {
        throw new BadRequestException('Invalid email or password.');
      }

      const accessToken = await this.createAccessToken(user.id, user.email);
      const refreshToken = await this.createRefreshToken(user.id, user.email);

      await this.storeRefreshToken(user.id, refreshToken);

      this.logger.log(`User logged in: ${user.email}`);

      return {
        accessToken,
        refreshToken,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      };
    } catch (error) {
      this.handleFailure('Login failed', error);
    }
  }

  async forgotPassword(data: ForgotPasswordDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email: data.email },
        select: {
          id: true,
          email: true,
        },
      });

      if (!user) {
        this.logger.warn(
          `Password reset requested for non-existent email: ${data.email}`,
        );
        return { message: 'If this email exists, a reset link has been sent.' };
      }

      const token = randomBytes(32).toString('hex');
      const expiresAt = new Date(Date.now() + 30 * 60 * 1000);

      await this.prisma.passwordResetToken.create({
        data: {
          token,
          expiresAt,
          userId: user.id,
        },
      });

      this.logger.log(`Password reset token created for: ${user.email}`);

      return { message: 'Password reset link sent.', token };
    } catch (error) {
      this.handleFailure('Forgot password failed', error);
    }
  }

  async resetPassword(data: ResetPasswordDto) {
    try {
      const tokenRecord = await this.prisma.passwordResetToken.findUnique({
        where: { token: data.token },
      });

      if (
        !tokenRecord ||
        tokenRecord.used ||
        tokenRecord.expiresAt < new Date()
      ) {
        throw new BadRequestException('Invalid or expired reset token.');
      }

      const hashedPassword = await this.hashPassword(data.newPassword);

      await this.prisma.$transaction([
        this.prisma.user.update({
          where: { id: tokenRecord.userId },
          data: { password: hashedPassword },
        }),
        this.prisma.passwordResetToken.update({
          where: { id: tokenRecord.id },
          data: { used: true },
        }),
      ]);

      this.logger.log(
        `Password reset successfully for user ID: ${tokenRecord.userId}`,
      );

      return { message: 'Password has been successfully reset.' };
    } catch (error) {
      this.handleFailure('Reset password failed', error);
    }
  }

  async updatePassword(userId: number, data: UpdatePasswordDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          password: true,
        },
      });

      if (!user) throw new NotFoundException('User not found.');

      const passwordMatches = await this.verifyPassword(
        data.currentPassword,
        user.password,
      );

      if (!passwordMatches)
        throw new BadRequestException('Current password is incorrect.');

      const newHashedPassword = await this.hashPassword(data.newPassword);

      await this.prisma.user.update({
        where: { id: userId },
        data: { password: newHashedPassword },
      });

      this.logger.log(`Password updated for user ID: ${userId}`);

      return { message: 'Password updated successfully.' };
    } catch (error) {
      this.handleFailure('Password update failed', error);
    }
  }

  async refresh(data: RefreshTokenDto) {
    try {
      const payload = await this.jwtService.verifyAsync<JWTPayload>(
        data.refreshToken,
      );

      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
        select: {
          id: true,
          email: true,
          refreshToken: true,
        },
      });

      if (!user || !user.refreshToken)
        throw new BadRequestException('Invalid refresh token.');

      const tokenIsValid = await this.refreshTokenMatches(
        data.refreshToken,
        user.refreshToken,
      );

      if (!tokenIsValid)
        throw new BadRequestException('Invalid refresh token.');

      const newAccessToken = await this.createAccessToken(user.id, user.email);
      const newRefreshToken = await this.createRefreshToken(
        user.id,
        user.email,
      );

      await this.storeRefreshToken(user.id, newRefreshToken);

      return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      };
    } catch (error) {
      this.handleFailure('Token refresh failed', error);
    }
  }

  async logout(userId: number): Promise<{ message: string }> {
    console.log(userId, 'userId');

    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });

    this.logger.log(`User logged out: ${userId}`);

    return { message: 'Logout successful' };
  }
}
