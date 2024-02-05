import { NatsService } from '@nats/nats.service';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class NotificationService {
  constructor(private readonly natsService: NatsService) {}
  logger = new Logger(NotificationService.name);
  readonly requestId: string;
}
