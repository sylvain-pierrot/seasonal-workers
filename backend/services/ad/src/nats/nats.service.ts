import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NatsConnection, Service, ServiceGroup, connect } from 'nats';

@Injectable()
export class NatsService {
  natsClient: NatsConnection;
  experience: ServiceGroup;
  availability: ServiceGroup;
  job: ServiceGroup;
  private privateService: Service;
  private readonly configService: ConfigService;

  async init() {
    this.natsClient = await connect({
      servers: ['nats://localhost:4222'],
      timeout: 1000,
    });

    this.privateService = await this.natsClient.services.add({
      name: 'ADS',
      version: '1.0.0',
      description: 'Ads service',
    });

    this.experience = this.privateService.addGroup('ADS.experiences');
    this.availability = this.privateService.addGroup('ADS.availabilities');
    this.job = this.privateService.addGroup('ADS.jobs');
  }
}
