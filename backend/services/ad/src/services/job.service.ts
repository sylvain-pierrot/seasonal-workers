import { AdEntity } from '@entities/ads.entity';
import { AdTypeEnum } from '@proto/models/ad';
import {
  AdsRepository,
  JobStatusRepository,
} from '@repositories/ads.repository';
import { BadRequestException, Injectable } from '@nestjs/common';
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
import { NatsService, NatsSubjects } from '@app/nats/nats.service';
import { Notification, NotificationType } from '@proto/models/notification';
import { v4 as uuidv4 } from 'uuid';
import { ErrorEventsLogEntity } from '@app/entities/event.entity';
import { NotificationService } from './notifications.service';

@Injectable()
export class JobService {
  private logger = new Logger(JobService.name);
  constructor(
    @InjectRepository(AdEntity)
    private adsRepository: AdsRepository,
    @InjectRepository(JobOfferStatusEntity)
    private jobStatusRepository: JobStatusRepository,
    private notificationService: NotificationService,
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
    const job = await this.adsRepository.findOneOrFail({
      where: {
        id: jobId,
        ad_type: AdTypeEnum.JOB_OFFER,
      },
    });
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

    const offerStatus = await this.jobStatusRepository.save(applyJobOffer);
    const offer = await this.adsRepository.findOneOrFail({
      where: {
        id: offerStatus.offerId,
      },
    });

    const notification =
      this.notificationService.constructJobOfferStatusNotification(
        workerId,
        status,
        offer,
      );

    await this.notificationService.send(
      notification,
      NatsSubjects.NOTIFICATION_CREATE,
    );
    const response = {
      requestId: request.requestId,
      applyJobOfferResponse: {
        id: offer.id,
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
  async updateJobOfferStatus(request: Request): Promise<Uint8Array> {
    const status = request.updateJobOfferStatusRequest.status;
    const offerId = request.updateJobOfferStatusRequest.offerId;
    const workerId = request.updateJobOfferStatusRequest.workerId;
    // Check if the worker has applied to the job offer
    const jobStatus = await this.jobStatusRepository.findOneOrFail({
      where: {
        workerId: workerId,
        offerId: offerId,
      },
    });
    jobStatus.status = status;
    // Update the status
    const job = await this.jobStatusRepository.save(jobStatus);
    const offer = jobStatus.offer;
    // Send notification after updating the status
    const notification =
      this.notificationService.constructJobOfferStatusNotification(
        workerId,
        status,
        offer,
      );
    await this.notificationService.send(
      notification,
      NatsSubjects.NOTIFICATION_CREATE,
    );
    const response = {
      requestId: request.requestId,
      updateJobOfferStatusResponse: {
        id: job.id,
      },
    } as Response;

    return NatsResponse.success(response);
  }
}
