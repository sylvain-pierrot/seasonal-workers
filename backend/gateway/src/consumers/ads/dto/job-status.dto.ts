import {
  JobOfferStatus,
  JobOfferStatusEnum,
} from '@app/proto_generated/models/job-status';
import { IsString, IsNotEmpty, IsEnum, IsEmpty } from 'class-validator';
export class JobStatusDto implements JobOfferStatus {
  @IsEmpty()
  statusId: string;
  @IsEmpty()
  createdAt: string;
  @IsEmpty()
  workerId: string;
  @IsNotEmpty()
  @IsString()
  offerId: string;
  @IsEmpty()
  status: JobOfferStatusEnum;
  @IsEmpty()
  offer: any;
}
