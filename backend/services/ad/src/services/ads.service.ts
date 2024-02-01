import { AdEntity } from '@app/entities/ads.entity';
import { AdTypeEnum } from '@proto/models/ads';
import { AdsRepository } from '@app/repositories/ads.repository';
import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';
import {
  convertAdEntityToProto,
  convertProtoToAdEntity,
} from '@app/utils/utils';
@Injectable()
export class AdService {
  private logger = new Logger(AdService.name);

  constructor(
    @InjectRepository(AdEntity)
    private adsRepository: AdsRepository,
  ) {}

  async CreateExperience(request: Request): Promise<Uint8Array> {
    const ad = request.createExperienceRequest.ad;
    ad.adType = AdTypeEnum.EXPERIENCE;
    ad.salaryAmount = null;
    ad.salaryCurrency = null;
    const entity = convertProtoToAdEntity(ad);
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
      return convertAdEntityToProto(ad);
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

  async getExperienceById(request: Request): Promise<Uint8Array> {
    const id = request.getExperienceRequest.id;
    const experience = await this.adsRepository.findOne({ where: { id } });
    const response = Response.fromPartial({
      requestId: request.requestId,
      getExperienceResponse: {
        ad: convertAdEntityToProto(experience),
      },
    });
    const encodedResponse = Response.encode(response).finish();
    return encodedResponse;
  }

  async updateExperience(request: Request): Promise<Uint8Array> {
    const ad = request.updateExperienceRequest.ad;
    const id = request.updateExperienceRequest.id;
    const entity = convertProtoToAdEntity(ad);
    const update = await this.adsRepository.update(id, entity);
    const response = Response.fromPartial({
      requestId: request.requestId,
      updateExperienceResponse: {
        id: update.raw.id,
      },
    });
    const encodedResponse = Response.encode(response).finish();
    return encodedResponse;
  }

  async deleteExperience(request: Request): Promise<Uint8Array> {
    const id = request.deleteExperienceRequest.id;
    const deleteExperience = await this.adsRepository.delete(id);
    const response = Response.fromPartial({
      requestId: request.requestId,
      deleteExperienceResponse: {
        id: deleteExperience.raw.id,
      },
    });
    const encodedResponse = Response.encode(response).finish();
    return encodedResponse;
  }
}
