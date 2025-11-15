import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { setupSwagger } from './config/swagger.config';

async function bootstrap() {
  try {
    // Create NestJS app with Fastify
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );

    // Enable CORS
    app.enableCors();

    // Setup Swagger (API docs)
    setupSwagger(app);

    // Start the server
    const port = process.env.PORT ?? 5000;
    await app.listen(port, '0.0.0.0');

    console.log(`🚀 Application is running on: http://localhost:${port}`);
    console.log(`📄 Swagger docs available at: http://localhost:${port}/docs`);
  } catch (err) {
    console.error('Bootstrap failed', err);
    process.exit(1);
  }
}

bootstrap().catch((err) => {
  console.error('Bootstrap failed', err);
  process.exit(1);
});
