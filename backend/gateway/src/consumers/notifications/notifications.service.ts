import { NatsSubjects } from '@app/nats/nats.enum';
import { NatsService } from '@nats/nats.service';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';

@Injectable()
export class NotificationService {
  constructor(private readonly natsService: NatsService) {}
  logger = new Logger(NotificationService.name);
  readonly requestId: string;

  async requestProtoSerializer(
    request: Request,
    subject: NatsSubjects,
  ): Promise<Response> {
    try {
      const payload = Request.encode(request).finish();
      const reply = await this.natsService.natsClient.request(subject, payload);
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
