import type { FastifyRequest } from 'fastify';

export interface AuthenticatedUser {
  userId: number;
  email: string;
}

export interface AuthenticatedRequest extends FastifyRequest {
  user: AuthenticatedUser;
}
