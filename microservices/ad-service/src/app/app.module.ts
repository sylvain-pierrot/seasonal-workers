import { Module } from '@nestjs/common';
import { AdController } from '../ads/ads.controller';
import { AdService } from '../ads/ads.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ADS_SERVICE', // Unique name for the client
        transport: Transport.NATS,
        options: {
          url: 'nats://localhost:4222', // Adjust the NATS server URL
          queue: 'subscriber-queue', // Optional queue group for load balancing
        },
      },
    ]),
  ],
  controllers: [AdController],
  providers: [AdService],
})
export class AppModule {}
