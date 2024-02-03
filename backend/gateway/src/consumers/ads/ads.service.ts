import { NatsService } from '@nats/nats.service';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';

@Injectable()
export class AdsService implements Request {
  constructor(private readonly natsService: NatsService) {}
  logger = new Logger(AdsService.name);
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

export enum NatsSubjects {
  EXPERIENCE_CREATE = 'ADS.experiences.create',
  EXPERIENCE_FIND = 'ADS.experiences.find',
  EXPERIENCE_UPDATE = 'ADS.experiences.update',
  EXPERIENCE_REMOVE = 'ADS.experiences.remove',
  AVAILABILITY_CREATE = 'ADS.availabilities.create',
  AVAILABILITY_FIND = 'ADS.availabilities.find',
  AVAILABILITY_UPDATE = 'ADS.availabilities.update',
  AVAILABILITY_REMOVE = 'ADS.availabilities.remove',
  JOB_OFFERS_CREATE = 'ADS.jobs.create',
  JOB_OFFERS_RECOMMENDATION = 'ADS.jobs.recommendation',
  JOB_OFFERS_FIND_ONE = 'ADS.jobs.findOne',
  APPLY_JOB_OFFER = 'ADS.jobs.apply',
  GET_APPLIED_JOB_OFFERS = 'ADS.jobs.status',
}
