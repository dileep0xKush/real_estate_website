import { FastifyReply } from 'fastify';

const baseCookieOptions = {
  httpOnly: true,
  path: '/',
};

export function setAuthCookies(
  reply: FastifyReply,
  accessToken: string,
  refreshToken: string,
): void {
  reply.setCookie('access_token', accessToken, {
    ...baseCookieOptions,
    secure: false, // // localhost   for pro - true
    sameSite: 'lax', // // localhost for pro -  'strict',
    maxAge: 60 * 60, // 60 minutes
  });

  reply.setCookie('refresh_token', refreshToken, {
    ...baseCookieOptions,
    secure: false, // // localhost   for pro - true
    sameSite: 'lax', // // localhost    for pro -  'strict',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });
}

export function clearAuthCookies(reply: FastifyReply): void {
  reply.clearCookie('access_token', { path: '/' });
  reply.clearCookie('refresh_token', { path: '/' });
}
