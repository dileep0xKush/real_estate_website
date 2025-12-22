import { FastifyReply } from 'fastify';

const isProd = process.env.NODE_ENV === 'production';

export function setAuthCookies(
  reply: FastifyReply,
  accessToken: string,
  refreshToken: string,
): void {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  reply.setCookie('access_token', accessToken, {
    httpOnly: true,
    secure: isProd,
    sameSite: 'strict',
    path: '/',
    maxAge: 15 * 60,
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  reply.setCookie('refresh_token', refreshToken, {
    httpOnly: true,
    secure: isProd,
    sameSite: 'strict',
    path: '/',
    maxAge: 7 * 24 * 60 * 60,
  });
}

export function clearAuthCookies(reply: FastifyReply): void {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  reply.clearCookie('access_token', {
    path: '/',
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  reply.clearCookie('refresh_token', {
    path: '/',
  });
}
