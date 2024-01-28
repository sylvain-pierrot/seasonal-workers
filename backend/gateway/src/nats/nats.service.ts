import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NatsConnection, connect } from 'nats';

@Injectable()
export class NatsService {
  natsClient: NatsConnection;
  private readonly configService: ConfigService;

  async connect() {
    this.natsClient = await connect({
      servers: ['nats://localhost:4222'],
      timeout: 1000,
    });
  }
}
