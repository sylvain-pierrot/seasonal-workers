import { NatsService } from '@app/nats/nats.service';
import { Injectable, Logger } from '@nestjs/common';
import { Ad } from '@proto/ad';

@Injectable()
export class AppService {
  constructor(private readonly natsService: NatsService) {}
  logger = new Logger(AppService.name);

  async postAd(message: Ad, subject: string): Promise<Ad> {
    try {
      const payload = Ad.encode(message).finish();
      this.logger.log(`\n------------------\n${payload}\n------------------\n`);
      const reply = await this.natsService.natsClient.request(subject, payload);
      const result = Ad.decode(reply.data);

      return result;
    } catch (error) {
      this.logger.error(error);
    }
  }
}
