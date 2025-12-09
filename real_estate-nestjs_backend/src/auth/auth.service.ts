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

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  private handleError(context: string, err: unknown): never {
    const message = err instanceof Error ? err.message : String(err);
    this.logger.error(`${context}: ${message}`);

    if (err instanceof BadRequestException) throw err;
    if (err instanceof NotFoundException) throw err;

    throw new InternalServerErrorException(context);
  }

  private hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  private validatePassword(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }

  private signAccessToken(userId: number, email: string) {
    return this.jwtService.signAsync({ sub: userId, email });
  }

  private signRefreshToken(userId: number, email: string) {
    return this.jwtService.signAsync(
      { sub: userId, email },
      { expiresIn: '7d' },
    );
  }

  private async validateToken(token: string, stored: string | null) {
    if (!stored) return false;
    return bcrypt.compare(token, stored);
  }

  private async storeRefreshToken(userId: number, token: string) {
    const hashed = await bcrypt.hash(token, 10);

    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: hashed },
    });
  }

  async register(dto: RegisterDto) {
    try {
      const emailExists = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });
      if (emailExists) {
        throw new BadRequestException('Email already in use');
      }

      const userNameExists = await this.prisma.user.findUnique({
        where: { userName: dto.userName },
      });
      if (userNameExists) {
        throw new BadRequestException('Username already in use');
      }

      const hashed = await this.hashPassword(dto.password);

      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          userName: dto.userName,
          name: dto.name,
          password: hashed,
        },
      });

      this.logger.log(`User created: ${user.email}`);

      return {
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      };
    } catch (err) {
      this.handleError('Registration failed', err);
    }
  }

  async login(dto: LoginDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });

      if (!user) throw new BadRequestException('Invalid credentials');

      const valid = await this.validatePassword(dto.password, user.password);
      if (!valid) throw new BadRequestException('Invalid credentials');

      const accessToken = await this.signAccessToken(user.id, user.email);
      const refreshToken = await this.signRefreshToken(user.id, user.email);

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
    } catch (err) {
      this.handleError('Login failed', err);
    }
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });

      if (!user) {
        this.logger.warn(
          `Password reset tried for unknown email: ${dto.email}`,
        );
        return { message: 'If that email exists, a reset link was sent' };
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

      this.logger.log(`Password reset token created for ${user.email}`);

      return { message: 'Reset link sent', token };
    } catch (err) {
      this.handleError('Forgot password failed', err);
    }
  }

  async resetPassword(dto: ResetPasswordDto) {
    try {
      const tokenRecord = await this.prisma.passwordResetToken.findUnique({
        where: { token: dto.token },
      });

      if (
        !tokenRecord ||
        tokenRecord.used ||
        tokenRecord.expiresAt < new Date()
      ) {
        throw new BadRequestException('Invalid or expired reset token');
      }

      const hashed = await this.hashPassword(dto.newPassword);

      await this.prisma.$transaction([
        this.prisma.user.update({
          where: { id: tokenRecord.userId },
          data: { password: hashed },
        }),
        this.prisma.passwordResetToken.update({
          where: { id: tokenRecord.id },
          data: { used: true },
        }),
      ]);

      this.logger.log(`Password reset for user ID ${tokenRecord.userId}`);

      return { message: 'Password reset successfully' };
    } catch (err) {
      this.handleError('Reset password failed', err);
    }
  }

  async updatePassword(userId: number, dto: UpdatePasswordDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) throw new NotFoundException('User not found');

      const valid = await this.validatePassword(
        dto.currentPassword,
        user.password,
      );

      if (!valid) {
        throw new BadRequestException('Current password is incorrect');
      }

      const hashed = await this.hashPassword(dto.newPassword);

      await this.prisma.user.update({
        where: { id: userId },
        data: { password: hashed },
      });

      this.logger.log(`Password updated for user ID: ${userId}`);

      return { message: 'Password updated successfully' };
    } catch (err) {
      this.handleError('Update password failed', err);
    }
  }

  async refresh(dto: RefreshTokenDto) {
    try {
      const decoded = await this.jwtService.verifyAsync<JWTPayload>(
        dto.refreshToken,
      );

      const user = await this.prisma.user.findUnique({
        where: { id: decoded.sub },
      });

      if (!user || !user.refreshToken) {
        throw new BadRequestException('Invalid refresh token');
      }

      const valid = await this.validateToken(
        dto.refreshToken,
        user.refreshToken,
      );

      if (!valid) {
        throw new BadRequestException('Invalid refresh token');
      }

      const newAccessToken = await this.signAccessToken(user.id, user.email);
      const newRefreshToken = await this.signRefreshToken(user.id, user.email);

      await this.storeRefreshToken(user.id, newRefreshToken);

      return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      };
    } catch (err) {
      this.handleError('Refresh token failed', err);
    }
  }
}
