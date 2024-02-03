import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Unique,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { AdEntity } from './ads.entity';
import {
  JobOfferStatus,
  JobOfferStatusEnum,
} from '@app/proto_generated/models/job-status';
@Entity('JobOfferStatus')
@Unique(['workerId', 'offerId'])
@Index(['workerId', 'offerId'], { unique: true })
export class JobOfferStatusEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'worker_id', type: 'uuid' })
  workerId: string;

  @Column({ name: 'offer_id', type: 'uuid' })
  offerId: string;

  @Column({ enum: JobOfferStatusEnum, type: 'enum' })
  status: JobOfferStatusEnum;

  @ManyToOne(() => AdEntity, { eager: true })
  @JoinColumn({ name: 'offer_id' })
  offer: AdEntity;

  public static fromPartial(
    object: Partial<JobOfferStatusEntity>,
  ): JobOfferStatusEntity {
    const entity = new JobOfferStatusEntity();
    entity.workerId = object.workerId;
    entity.offerId = object.offerId;
    entity.status = object.status;
    return entity;
  }

  public static fromEntitytoProto(
    entity: JobOfferStatusEntity,
  ): JobOfferStatus {
    const proto = JobOfferStatus.fromPartial({
      statusId: entity.id,
      createdAt: entity.createdAt.toISOString(),
      workerId: entity.workerId,
      offerId: entity.offerId,
      status: entity.status,
      offer: AdEntity.fromEntitytoProto(entity.offer),
    });
    return proto;
  }
}
