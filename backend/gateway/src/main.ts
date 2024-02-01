import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Mains');
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'log', 'verbose'],
  });
  const configService = app.get(ConfigService);
  const port = configService.get('PORT_GATEWAY');
  app.setGlobalPrefix('api/ads');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
  logger.log(`API Gateway listen on ${port}`);
}
bootstrap();
