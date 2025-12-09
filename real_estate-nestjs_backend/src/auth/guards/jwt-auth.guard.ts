import {
  ExecutionContext,
  Injectable,
  Logger,
  SetMetadata,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import type { FastifyRequest } from 'fastify';
import type { AuthenticatedUser } from '../interfaces/authenticated-request.interface';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

interface AuthenticatedFastifyRequest extends FastifyRequest {
  user: AuthenticatedUser;
}

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private readonly logger = new Logger(JwtAuthGuard.name);

  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      this.logger.debug('Public route → skipping JWT check');
      return true;
    }

    this.logger.debug('JWT Guard → Running passport authentication');
    return super.canActivate(context);
  }

  // ⭐ MUST MATCH NESTJS SIGNATURE EXACTLY — FIXES TS2416 ERROR
  handleRequest<TUser = any>(
    err: any,
    user: any,
    info: any,
    context: ExecutionContext,
  ): TUser {
    this.logger.debug(`Passport user → ${JSON.stringify(user)}`);
    this.logger.debug(`Passport info → ${JSON.stringify(info)}`);

    if (err || !user) {
      throw err || new UnauthorizedException('Unauthorized');
    }

    if (!this.isAuthenticatedUser(user)) {
      this.logger.error(
        `Invalid token payload received → ${JSON.stringify(user)}`,
      );
      throw new UnauthorizedException('Invalid token payload');
    }

    const request = context
      .switchToHttp()
      .getRequest<AuthenticatedFastifyRequest>();

    request.user = user;

    this.logger.debug(
      `Authenticated → userId=${user.userId}, email=${user.email}`,
    );

    return user as TUser; // ⭐ Required to satisfy generic type
  }

  private isAuthenticatedUser(value: unknown): value is AuthenticatedUser {
    return (
      typeof value === 'object' &&
      value !== null &&
      'userId' in value &&
      'email' in value
    );
  }
}
