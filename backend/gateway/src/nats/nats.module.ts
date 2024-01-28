import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { NatsService } from './nats.service';

@Module({
  providers: [NatsService],
  exports: [NatsService],
})
export class NatsModule implements OnApplicationBootstrap {
  constructor(private readonly natsService: NatsService) {}

  async onApplicationBootstrap() {
    await this.natsService.connect();
  }
}
