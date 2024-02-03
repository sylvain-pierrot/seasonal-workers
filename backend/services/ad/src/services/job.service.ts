import { AdEntity } from '@entities/ads.entity';
import { AdTypeEnum } from '@proto/models/ad';
import {
  AdsRepository,
  JobStatusRepository,
} from '@repositories/ads.repository';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';
import { In } from 'typeorm';
import { JobOfferStatusEntity } from '@entities/job-status.entity';
import { JobOfferStatusEnum } from '@proto/models/job-status';
import { UUID } from 'crypto';
import { NatsResponse } from '@utils/response';
import { isValideDateRange } from '@utils/utils';
@Injectable()
export class JobService {
  private logger = new Logger(JobService.name);
  constructor(
    @InjectRepository(AdEntity)
    private adsRepository: AdsRepository,
    @InjectRepository(JobOfferStatusEntity)
    private jobStatusRepository: JobStatusRepository,
  ) {}
  async CreateJobOffer(request: Request): Promise<Uint8Array> {
    const jobOffer = request.createJobOfferRequest.jobOffer;
    if (!isValideDateRange(jobOffer.dateRange)) {
      throw new BadRequestException(
        'Invalid date range, Must be in the future',
      );
    }
    jobOffer.adType = AdTypeEnum.JOB_OFFER;
    const entity = AdEntity.fromProto(jobOffer);
    const result = await this.adsRepository.save(entity);
    const response = {
      requestId: request.requestId,
      createJobOfferResponse: {
        offerId: result.id,
      },
    } as Response;

    return NatsResponse.success(response);
  }
  async getJobOffersRecommandation(request: Request): Promise<Uint8Array> {
    const userId = request.getJobOffersRecommendationRequest.userId;
    const adToSearch = [AdTypeEnum.AVAILABILITY, AdTypeEnum.EXPERIENCE];
    const userInterests = await this.adsRepository.find({
      where: {
        user_id: userId,
        ad_type: In(adToSearch),
      },
    });
    const jobCategoriesInterests = userInterests.map((ad: AdEntity) => {
      return ad.jobTitle;
    });

    const result = await this.adsRepository.findBy({
      ad_type: AdTypeEnum.JOB_OFFER,
      jobTitle: In(jobCategoriesInterests),
    });
    const jobs = AdEntity.arrayToProto(result);

    // If no recommendation found, return random job offers
    if (jobs.length === 0) {
      const randomAds = await this.adsRepository.find({
        where: {
          ad_type: AdTypeEnum.JOB_OFFER,
        },
      });
      const randomJobsProto = AdEntity.arrayToProto(randomAds);

      const response = {
        requestId: request.requestId,
        getJobOffersRecommendationResponse: {
          jobOffers: randomJobsProto,
        },
      } as Response;
      return NatsResponse.success(response);
    }

    const response = {
      requestId: request.requestId,
      getJobOffersRecommendationResponse: {
        jobOffers: jobs,
      },
    } as Response;
    return NatsResponse.success(response);
  }
  async getJobOffer(request: Request): Promise<Uint8Array> {
    const jobId = request.getJobOfferRequest.offerId;
    const job = await this.adsRepository.findOne({
      where: {
        id: jobId,
        ad_type: AdTypeEnum.JOB_OFFER,
      },
    });
    if (!job) {
      throw new NotFoundException('Job offer not found');
    }
    const response = {
      requestId: request.requestId,
      getJobOfferResponse: {
        jobOffer: AdEntity.toProto(job),
      },
    } as Response;
    return NatsResponse.success(response);
  }
  async applyToJobOffer(request: Request) {
    const offerId = request.applyJobOfferRequest.offerId;
    const workerId = request.applyJobOfferRequest.workerId;
    const status = JobOfferStatusEnum.PENDING;
    const applyJobOffer = JobOfferStatusEntity.fromPartial({
      workerId: workerId,
      offerId: offerId as UUID,
      status: status,
    });

    const result = await this.jobStatusRepository.save(applyJobOffer);
    const response = {
      requestId: request.requestId,
      applyJobOfferResponse: {
        id: result.offerId,
      },
    } as Response;
    return NatsResponse.success(response);
  }
  async getJobOfferStatus(request: Request): Promise<Uint8Array> {
    const workerId = request.getJobOffersStatusRequest.workerId;
    const jobStatus = await this.jobStatusRepository.find({
      where: {
        workerId: workerId,
      },
    });
    const proto = JobOfferStatusEntity.arrayToProto(jobStatus);

    const response = {
      requestId: request.requestId,
      getJobOfferStatusResponse: {
        jobOffers: proto,
      },
    } as Response;

    return NatsResponse.success(response);
  }
}
