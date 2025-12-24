import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastifyCookie from '@fastify/cookie';
import { setupSwagger } from './config/swagger.config';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    await app.register(fastifyCookie, {
      secret: process.env.COOKIE_SECRET,
    });

    app.enableCors({
      origin: ['http://localhost:3000'],
      credentials: true,
    });

    app.useGlobalInterceptors(new ResponseInterceptor());
    setupSwagger(app);

    const port = process.env.PORT ?? 5000;
    await app.listen(port, '0.0.0.0');

    console.log(`Application is running on: http://localhost:${port}`);
    console.log(`Swagger docs available at: http://localhost:${port}/docs`);
  } catch (err) {
    console.error('Bootstrap failed', err);
    process.exit(1);
  }
}

bootstrap().catch((err) => {
  console.error('Bootstrap failed', err);
  process.exit(1);
});
