import { AdEntity } from '@app/entities/ads.entity';
import { JobOfferStatusEntity } from '@app/entities/job-status.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class AdsRepository extends Repository<AdEntity> {
  constructor(private dataSource: DataSource) {
    super(AdEntity, dataSource.createEntityManager());
  }
}

@Injectable()
export class JobStatusRepository extends Repository<JobOfferStatusEntity> {
  constructor(private dataSource: DataSource) {
    super(AdEntity, dataSource.createEntityManager());
  }
}
