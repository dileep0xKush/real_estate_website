import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import type { FastifyRequest } from 'fastify';
import { PrismaService } from '../../prisma/prisma.service';
import type { JWTPayload } from '../interfaces/jwt-payload.interface';
import type { AuthenticatedUser } from '../interfaces/authenticated-request.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: FastifyRequest) => {
          const header = req.headers.authorization;
          if (!header) return null;

          // Expected: "Bearer <token>"
          return header.startsWith('Bearer ') ? header.substring(7) : header;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET ?? 'default_jwt_secret',
    });
  }

  async validate(payload: JWTPayload): Promise<AuthenticatedUser> {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
    });

    if (!user) throw new UnauthorizedException('Invalid token');

    return {
      userId: user.id,
      email: user.email,
    };
  }
}
