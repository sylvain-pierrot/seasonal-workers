import { AdEntity } from '@app/entities/ads.entity';
import { AdTypeEnum } from '@proto/models/ads';
import { AdsRepository } from '@app/repositories/ads.repository';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';
import {
  isValideDateRange,
  convertAdEntityToProto,
  convertProtoToAdEntity,
  returnResponse,
} from '@app/utils/utils';
import { In } from 'typeorm';
@Injectable()
export class JobService {
  private logger = new Logger(JobService.name);
  constructor(
    @InjectRepository(AdEntity)
    private adsRepository: AdsRepository,
  ) {}

  async CreateJobOffer(request: Request): Promise<Uint8Array> {
    const jobOffer = request.createJobOfferRequest.jobOffer;
    if (!isValideDateRange(jobOffer.dateRange)) {
      throw new BadRequestException(
        'Invalid date range, Must be in the future',
      );
    }
    jobOffer.adType = AdTypeEnum.JOB_OFFER;
    const entity = convertProtoToAdEntity(jobOffer);
    const result = await this.adsRepository.save(entity);
    const response = {
      requestId: request.requestId,
      createJobOfferResponse: {
        offerId: result.id,
      },
    } as Response;

    return returnResponse(response);
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
      return ad.category;
    });

    const result = await this.adsRepository.findBy({
      ad_type: AdTypeEnum.JOB_OFFER,
      category: In(jobCategoriesInterests),
    });
    const jobs = result.map((ad) => {
      return convertAdEntityToProto(ad);
    });

    // If no recommendation found, return random job offers
    if (jobs.length === 0) {
      const randomAds = await this.adsRepository.find({
        where: {
          ad_type: AdTypeEnum.JOB_OFFER,
        },
      });
      const randomJobsProto = randomAds.map((ad) => {
        return convertAdEntityToProto(ad);
      });
      const response = {
        requestId: request.requestId,
        getJobOffersRecommendationResponse: {
          jobOffers: randomJobsProto,
        },
      } as Response;
      return returnResponse(response);
    }

    const response = {
      requestId: request.requestId,
      getJobOffersRecommendationResponse: {
        jobOffers: jobs,
      },
    } as Response;
    return returnResponse(response);
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
        jobOffer: convertAdEntityToProto(job),
      },
    } as Response;
    return returnResponse(response);
  }
}
