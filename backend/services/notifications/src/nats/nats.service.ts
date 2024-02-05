import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NatsConnection, Service, ServiceGroup, connect } from 'nats';

@Injectable()
export class NatsService {
  natsClient: NatsConnection;
  notificationsJobs: ServiceGroup;
  private privateService: Service;
  private readonly configService: ConfigService;

  async init() {
    this.natsClient = await connect({
      servers: ['nats://localhost:4222'],
      timeout: 1000,
    });

    this.privateService = await this.natsClient.services.add({
      name: 'NOTIFICATIONS',
      version: '1.0.0',
      description: 'NOTIFICATIONS service',
    });

    this.notificationsJobs = this.privateService.addGroup('NOTIFICATIONS.jobs');
  }
}
