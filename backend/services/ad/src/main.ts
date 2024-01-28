import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        servers: ['nats://localhost:4222'],
      },
      
    },
  );
  app.listen();
  console.log('Math microservice is listening');
}
bootstrap();
