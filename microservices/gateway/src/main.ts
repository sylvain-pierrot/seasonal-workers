import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Mains');

  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'log', 'verbose'],
  });

  app.setGlobalPrefix('api');
  const configService = app.get(ConfigService);
  const port = configService.get('PORT_GATEWAY');

  await app.listen(port);
}
bootstrap();
