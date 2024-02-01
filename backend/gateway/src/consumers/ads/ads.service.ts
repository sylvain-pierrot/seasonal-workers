import { NatsService } from '@nats/nats.service';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';

@Injectable()
export class AdsService implements Request {
  constructor(private readonly natsService: NatsService) {}
  logger = new Logger(AdsService.name);
  readonly requestId: string;

  async requestSerializer(
    request: Request,
    subject: NatsSubjects,
  ): Promise<Response> {
    const payload = Request.encode(request).finish();
    const reply = await this.natsService.natsClient.request(subject, payload);
    const response = Response.decode(reply.data);
    return response;
  }

  async performRequest(
    req: Request,
    subject: NatsSubjects,
  ): Promise<Response> {
    const request = Request.create(req);
    const response = await this.requestSerializer(request, subject);
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
  EXPERIENCE_CREATE = 'ADS.expriences.create',
  EXPERIENCE_FIND = 'ADS.expriences.find',
  EXPERIENCE_UPDATE = 'ADS.expriences.update',
  EXPERIENCE_REMOVE = 'ADS.expriences.remove',
}
