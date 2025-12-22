import {
  Body,
  Controller,
  Post,
  Patch,
  UseGuards,
  Req,
  Res,
  Get,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import type {
  AuthenticatedRequest,
  AuthenticatedUser,
} from './interfaces/authenticated-request.interface';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ResponseWithIdAndMessage } from '../common/interfaces/response.interface';
import { setAuthCookies } from '../common/helper/auth-cookie.helper';
import type { FastifyReply } from 'fastify/types/reply';
import { clearAuthCookies } from '../common/helper/auth-cookie.helper';

type ReplyWithCookies = FastifyReply;
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto): Promise<ResponseWithIdAndMessage> {
    return this.auth.register(dto);
  }

  @Post('login')
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) reply: FastifyReply,
  ) {
    const { accessToken, refreshToken, user } = await this.auth.login(dto);
    setAuthCookies(reply, accessToken, refreshToken);
    return {
      message: 'Login successful',
      user,
    };
  }

  @Post('forgot-password')
  forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.auth.forgotPassword(dto);
  }

  @Post('reset-password')
  resetPassword(@Body() dto: ResetPasswordDto) {
    return this.auth.resetPassword(dto);
  }

  @Patch('update-password')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  updatePassword(
    @Req() req: AuthenticatedRequest,
    @Body() dto: UpdatePasswordDto,
  ) {
    return this.auth.updatePassword(req.user.userId, dto);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(
    @Req() req: { user: { userId: number } },
    @Res({ passthrough: true }) reply: ReplyWithCookies,
  ) {
    const userId = req.user.userId;
    console.log('Logout userId:', userId);

    await this.auth.logout(userId);
    clearAuthCookies(reply);

    return {
      message: 'Logged out successfully',
    };
  }
  @Get('users')
  @UseGuards(JwtAuthGuard)
  me(@Req() req: { user: AuthenticatedUser }) {
    return {
      authenticated: true,
      user: req.user,
    };
  }
}
