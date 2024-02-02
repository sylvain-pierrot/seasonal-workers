import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Unique,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { AdEntity } from './ads.entity';
import { JobOfferStatusEnum } from '@app/proto_generated/models/ads';
import { UUID } from 'crypto';

@Entity('JobOfferStatus')
@Unique(['worker_id', 'offer_id'])
export class JobOfferStatusEntity {
  @PrimaryGeneratedColumn({ name: 'status_id' })
  statusId: UUID;

  @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'worker_id', type: 'uuid' })
  workerId: UUID;

  @ManyToOne(() => AdEntity, { eager: true })
  @JoinColumn({ name: 'offer_id' })
  offer: AdEntity;

  @Column({ enum: JobOfferStatusEnum, type: 'enum' })
  status: string;
}
