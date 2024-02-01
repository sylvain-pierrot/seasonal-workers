import { Module, OnModuleInit } from '@nestjs/common';
import { NatsService } from './nats.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [NatsService],
  exports: [NatsService],
})
export class NatsModule implements OnModuleInit {
  constructor(private readonly natsService: NatsService) {}
  async onModuleInit() {
    await this.natsService.init();
  }
}
