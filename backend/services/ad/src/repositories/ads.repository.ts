import { AdEntity } from '@app/entities/ads.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class AdsRepository extends Repository<AdEntity> {
  constructor(private dataSource: DataSource) {
    super(AdEntity, dataSource.createEntityManager());
  }
}
