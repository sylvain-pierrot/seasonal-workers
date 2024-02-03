import { JobCategoryEntity } from '@entities/job-categories.entity';
import { JobsRepository } from '@repositories/ads.repository';
import { NatsResponse } from '@utils/response';
import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';

@Injectable()
export class JobCategoryService {
  private logger = new Logger(JobCategoryService.name);

  constructor(
    @InjectRepository(JobCategoryEntity)
    private jobCategoryRepository: JobsRepository,
  ) {}

  async getJobCategories(request: Request) {
    const requestId = request.requestId;
    const categories = await this.jobCategoryRepository.find();
    const proto = JobCategoryEntity.arrayToProto(categories);
    const response = {
      requestId: requestId,
      getJobCategoriesResponse: {
        categories: proto,
      },
    } as Response;
    return NatsResponse.success(response);
  }
}
