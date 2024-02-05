import { AdEntity } from '@entities/ads.entity';
import { JobOfferStatusEntity } from '@entities/job-status.entity';
import { JobCategoryEntity } from '@entities/job-categories.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ErrorEventsLogEntity } from '@app/entities/event.entity';

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
@Injectable()
export class JobsRepository extends Repository<JobCategoryEntity> {
  constructor(private dataSource: DataSource) {
    super(JobCategoryEntity, dataSource.createEntityManager());
  }
}
@Injectable()
export class EventErrorRepository extends Repository<ErrorEventsLogEntity> {
  constructor(private dataSource: DataSource) {
    super(JobCategoryEntity, dataSource.createEntityManager());
  }
}
