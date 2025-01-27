import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      logLevels: ['log', 'warn', 'error', 'fatal'],
      prefix: 'Contact List App',
      timestamp: true,
    }),
  });
  app.enableCors({
    origin: true,
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
