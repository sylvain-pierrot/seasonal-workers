import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NatsConnection, connect } from 'nats';

@Injectable()
export class NatsService {
  natsClient: NatsConnection;

  constructor(private readonly configService: ConfigService) {}

  async connect() {
    this.natsClient = await connect({
      servers: [this.configService.get<string>('NATS_HOST')],
      timeout: 1000,
    });
  }
}
