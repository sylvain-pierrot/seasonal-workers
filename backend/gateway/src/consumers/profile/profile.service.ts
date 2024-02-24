import { NatsService } from '@nats/nats.service';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ProfileService {
  constructor(private readonly natsService: NatsService) {}
  logger = new Logger(ProfileService.name);
  readonly requestId: string;
}
