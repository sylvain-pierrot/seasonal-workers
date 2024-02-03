import { AdEntity } from '@app/entities/ads.entity';
import { AdTypeEnum } from '@proto/models/ads';
import { AdsRepository } from '@app/repositories/ads.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';
@Injectable()
export class ExperienceService {
  private logger = new Logger(ExperienceService.name);

  constructor(
    @InjectRepository(AdEntity)
    private adsRepository: AdsRepository,
  ) {}

  async CreateExperience(request: Request): Promise<Uint8Array> {
    const ad = request.createExperienceRequest.ad;
    ad.id = null;
    ad.adType = AdTypeEnum.EXPERIENCE;
    ad.salaryAmount = null;
    ad.salaryCurrency = null;
    const entity = AdEntity.fromProto(ad);
    const save = await this.adsRepository.save(entity);
    const response = Response.fromPartial({
      requestId: request.requestId,
      createExperienceResponse: {
        id: save.id,
      },
    });
    const encoded = Response.encode(response).finish();
    return encoded;
  }

  async getAllExperiences(request: Request): Promise<Uint8Array> {
    const userId = request.getExperiencesRequest.id;
    const experiences = await this.adsRepository.find({
      where: { user_id: userId, ad_type: AdTypeEnum.EXPERIENCE },
    });
    const ads = experiences.map((ad: AdEntity) => {
      return AdEntity.fromEntitytoProto(ad);
    });
    const response = Response.fromPartial({
      requestId: request.requestId,
      getExperiencesResponse: {
        ads: ads,
      },
    });
    const encodedResponse = Response.encode(response).finish();
    return encodedResponse;
  }

  async updateExperience(request: Request): Promise<Uint8Array> {
    const ad = request.updateExperienceRequest.ad;
    const adId = request.updateExperienceRequest.ad.id;
    const id = request.updateExperienceRequest.id;

    const entity = AdEntity.fromProto(ad);
    const updated = await this.adsRepository.update(
      {
        id: adId,
        ad_type: AdTypeEnum.EXPERIENCE,
        user_id: id,
      },
      entity,
    );

    if (updated.affected === 0) {
      throw new NotFoundException(
        'Impossible to update experience not found or already updated',
      );
    }

    const response = Response.fromPartial({
      requestId: request.requestId,
      updateExperienceResponse: {
        id: adId,
      },
    });
    const encodedResponse = Response.encode(response).finish();
    return encodedResponse;
  }

  async deleteExperience(request: Request): Promise<Uint8Array> {
    const id = request.deleteExperienceRequest.experienceId;
    const userId = request.deleteExperienceRequest.id;
    const deleted = await this.adsRepository.delete({
      id: id,
      ad_type: AdTypeEnum.EXPERIENCE,
      user_id: userId,
    });

    if (deleted.affected === 0) {
      throw new NotFoundException(
        'Impossible to delete experience not found or already deleted',
      );
    }
    const response = Response.fromPartial({
      requestId: request.requestId,
      deleteExperienceResponse: {
        id: id,
      },
    });
    const encodedResponse = Response.encode(response).finish();
    return encodedResponse;
  }
}
