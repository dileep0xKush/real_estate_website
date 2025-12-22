import { Module, Global, Logger } from '@nestjs/common';
import { CacheModule, CacheModuleOptions } from '@nestjs/cache-manager';

@Global()
@Module({
  imports: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: (): CacheModuleOptions => {
        const logger = new Logger('RedisModule');

        logger.log(
          `Redis cache initializing (${process.env.REDIS_HOST || 'localhost'}:${
            Number(process.env.REDIS_PORT) || 6379
          })`,
        );

        return {
          store: 'redis',
          socket: {
            host: process.env.REDIS_HOST || 'localhost',
            port: Number(process.env.REDIS_PORT) || 6379,
          },
          ttl: 60,
        };
      },
    }),
  ],
})
export class RedisModule {}
