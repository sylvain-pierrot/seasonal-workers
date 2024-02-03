import { AdEntity } from '@app/entities/ads.entity';
import { AdTypeEnum } from '@proto/models/ads';
import { AdsRepository } from '@app/repositories/ads.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';
import { returnResponse } from '@app/utils/utils';
@Injectable()
export class AvailabilityService {
  private logger = new Logger(AvailabilityService.name);

  constructor(
    @InjectRepository(AdEntity)
    private adsRepository: AdsRepository,
  ) {}

  async CreateAvailability(request: Request): Promise<Uint8Array> {
    const ad = request.createAvailabilityRequest.availability;
    ad.adType = AdTypeEnum.AVAILABILITY;
    const entity = AdEntity.fromProto(ad);
    const result = await this.adsRepository.save(entity);
    const response = {
      requestId: request.requestId,
      createAvailabilityResponse: {
        id: result.id,
      },
    } as Response;

    return returnResponse(response);
  }

  async getAvailabilities(request: Request): Promise<Uint8Array> {
    const userId = request.getAvailabilitiesRequest.id;
    const availabilitys = await this.adsRepository.find({
      where: { user_id: userId, ad_type: AdTypeEnum.AVAILABILITY },
    });
    const ads = availabilitys.map((ad: AdEntity) => {
      return AdEntity.fromEntitytoProto(ad);
    });
    const response = {
      requestId: request.requestId,
      getAvailabilitiesResponse: {
        ads: ads,
      },
    } as Response;

    return returnResponse(response);
  }

  async updateAvailability(request: Request): Promise<Uint8Array> {
    const availability = request.updateAvailabilityRequest.availability;
    const userId = request.updateAvailabilityRequest.id;
    const adId = availability.id;
    const entity = AdEntity.fromProto(availability);
    const updated = await this.adsRepository.update(
      {
        id: adId,
        ad_type: AdTypeEnum.AVAILABILITY,
        user_id: userId,
      },
      entity,
    );
    if (updated.affected === 0) {
      throw new NotFoundException(
        'Impossible to update the availability not found or already deleted',
      );
    }
    const response = {
      requestId: request.requestId,
      updateAvailabilityResponse: {
        id: adId,
      },
    } as Response;

    return returnResponse(response);
  }

  async deleteAvailability(request: Request): Promise<Uint8Array> {
    const adId = request.deleteAvailabilityRequest.availabilityId;
    const userId = request.deleteAvailabilityRequest.id;
    const deleted = await this.adsRepository.delete({
      id: adId,
      ad_type: AdTypeEnum.AVAILABILITY,
      user_id: userId,
    });
    if (deleted.affected === 0) {
      throw new NotFoundException(
        'Impossible to delete availability not found',
      );
    }
    const response = {
      requestId: request.requestId,
      deleteAvailabilityResponse: {
        id: adId,
      },
    } as Response;

    return returnResponse(response);
  }
}
