import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
import { NatsSubjects } from '@app/nats/nats.service';
import { Request } from '@proto/Request';

@Entity('ErrorEventsLog')
export class ErrorEventsLogEntity {
  @PrimaryGeneratedColumn('uuid')
  event_id: string;

  @Column({ nullable: false })
  natsSubjects: NatsSubjects;

  @Column({ nullable: false })
  errorMessages: string;

  @Column({ nullable: false })
  errorCode: number;

  @Column({ nullable: false, type: 'json' })
  request: Request;
}
