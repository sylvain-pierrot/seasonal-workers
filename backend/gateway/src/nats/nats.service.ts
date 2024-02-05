import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NatsConnection, Service, ServiceGroup, connect } from 'nats';
import { HttpException } from '@nestjs/common';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';
import { NatsSubjects } from './nats.enum';
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
    const request = Request.create(req);
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
