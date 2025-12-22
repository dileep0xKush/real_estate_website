import {
  Injectable,
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';
import { randomBytes } from 'crypto';

import {
  RegisterDto,
  LoginDto,
  ForgotPasswordDto,
  ResetPasswordDto,
  UpdatePasswordDto,
  RefreshTokenDto,
} from './dto';

import type { JWTPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private static readonly SALT_ROUNDS = 10;

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  /* -------------------- Utils -------------------- */

  private async hash(value: string): Promise<string> {
    return bcrypt.hash(value, AuthService.SALT_ROUNDS);
  }

  private async compare(raw: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(raw, hashed);
  }

  private async signAccessToken(id: number, email: string) {
    return this.jwt.signAsync({ sub: id, email });
  }

  private async signRefreshToken(id: number, email: string) {
    return this.jwt.signAsync(
      { sub: id, email },
      { expiresIn: '7d' },
    );
  }

  private async rotateRefreshToken(userId: number, token: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: await this.hash(token) },
    });
  }

  private throwInternal(context: string, err: unknown): never {
    this.logger.error(context, err instanceof Error ? err.stack : String(err));
    throw new InternalServerErrorException(context);
  }

  /* -------------------- Register -------------------- */

  async register(dto: RegisterDto) {
    const exists = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: dto.email }, { userName: dto.userName }],
      },
      select: { email: true, userName: true },
    });

    if (exists?.email === dto.email)
      throw new BadRequestException('Email already registered');

    if (exists?.userName === dto.userName)
      throw new BadRequestException('Username already taken');

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        userName: dto.userName,
        name: dto.name,
        password: await this.hash(dto.password),
      },
      select: { id: true, email: true, name: true },
    });

    this.logger.log(`User registered: ${user.email}`);
    return { user };
  }

  /* -------------------- Login -------------------- */

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
      },
    });

    if (!user || !(await this.compare(dto.password, user.password)))
      throw new UnauthorizedException('Invalid email or password');

    const [accessToken, refreshToken] = await Promise.all([
      this.signAccessToken(user.id, user.email),
      this.signRefreshToken(user.id, user.email),
    ]);

    await this.rotateRefreshToken(user.id, refreshToken);

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  }

  /* -------------------- Forgot Password -------------------- */

  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
      select: { id: true },
    });

    if (!user) {
      this.logger.warn(`Reset requested for non-existing email: ${dto.email}`);
      return { message: 'If this email exists, a reset link was sent.' };
    }

    await this.prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        token: randomBytes(32).toString('hex'),
        expiresAt: new Date(Date.now() + 30 * 60 * 1000),
      },
    });

    return { message: 'Password reset link sent.' };
  }

  /* -------------------- Reset Password -------------------- */

  async resetPassword(dto: ResetPasswordDto) {
    const token = await this.prisma.passwordResetToken.findUnique({
      where: { token: dto.token },
    });

    if (!token || token.used || token.expiresAt < new Date())
      throw new BadRequestException('Invalid or expired reset token');

    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: token.userId },
        data: { password: await this.hash(dto.newPassword) },
      }),
      this.prisma.passwordResetToken.update({
        where: { id: token.id },
        data: { used: true },
      }),
    ]);

    return { message: 'Password reset successful' };
  }

  /* -------------------- Update Password -------------------- */

  async updatePassword(userId: number, dto: UpdatePasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { password: true },
    });

    if (!user)
      throw new NotFoundException('User not found');

    if (!(await this.compare(dto.currentPassword, user.password)))
      throw new BadRequestException('Current password incorrect');

    await this.prisma.user.update({
      where: { id: userId },
      data: { password: await this.hash(dto.newPassword) },
    });

    return { message: 'Password updated successfully' };
  }

  /* -------------------- Refresh Token -------------------- */

  async refresh(dto: RefreshTokenDto) {
    let payload: JWTPayload;

    try {
      payload = await this.jwt.verifyAsync(dto.refreshToken);
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      select: { email: true, refreshToken: true },
    });

    if (
      !user ||
      !user.refreshToken ||
      !(await this.compare(dto.refreshToken, user.refreshToken))
    )
      throw new UnauthorizedException('Invalid refresh token');

    const [accessToken, refreshToken] = await Promise.all([
      this.signAccessToken(payload.sub, user.email),
      this.signRefreshToken(payload.sub, user.email),
    ]);

    await this.rotateRefreshToken(payload.sub, refreshToken);

    return { accessToken, refreshToken };
  }
}
