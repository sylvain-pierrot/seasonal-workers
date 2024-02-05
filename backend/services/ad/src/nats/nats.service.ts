import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NatsConnection, Service, ServiceGroup, connect } from 'nats';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';
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

  async requestProtoSerializer(
    request: Request,
    subject: NatsSubjects,
  ): Promise<Response> {
    try {
      const payload = Request.encode(request).finish();
      const reply = await this.natsClient.request(subject, payload);
      const response = Response.decode(reply.data);
      return response;
    } catch (error) {
      throw new HttpException('NATS request failed', parseInt(error.code));
    }
  }

  async performRequest(req: Request, subject: NatsSubjects): Promise<Response> {
    const request = Request.fromPartial(req);
    const response = await this.requestProtoSerializer(request, subject);
    if (response.error) {
      throw new HttpException(
        response.error.errorMessage,
        response.error.errorCode,
      );
    }

    return response;
  }
}

export enum NatsSubjects {
  NOTIFICATION_CREATE = 'NOTIFICATIONS.jobs.create',
}
