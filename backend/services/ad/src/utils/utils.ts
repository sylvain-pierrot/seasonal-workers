import { AdEntity } from '@app/entities/ads.entity';
import { Ad } from '@app/proto_generated/models/ads';
import { Response } from '@app/proto_generated/Response';

export const convertProtoToAdEntity = (ad: Ad): AdEntity => {
  const adEntity = new AdEntity();
  adEntity.user_id = ad.userId;
  adEntity.title = ad.title;
  adEntity.category = ad.jobCategory.category;
  adEntity.sub_category = ad.jobCategory.subCategory;
  adEntity.start_date = new Date(ad.dateRange.startDate);
  adEntity.end_date = new Date(ad.dateRange.endDate);
  adEntity.salary_amount = ad.salaryAmount;
  adEntity.salary_currency = ad.salaryCurrency;
  adEntity.city = ad.address.city;
  adEntity.zip_code = ad.address.zipCode;
  adEntity.country = ad.address.country;
  adEntity.description = ad.description;
  adEntity.ad_type = ad.adType;
  return adEntity;
};

export const convertAdEntityToProto = (ad: AdEntity): Ad => {
  const adProto = Ad.fromPartial({
    id: ad.id,
    userId: ad.user_id,
    title: ad.title,
    jobCategory: {
      category: ad.category,
      subCategory: ad.sub_category,
    },
    dateRange: {
      startDate: ad.start_date.toString(),
      endDate: ad.end_date.toString(),
    },
    salaryAmount: ad.salary_amount,
    salaryCurrency: ad.salary_currency,
    address: {
      city: ad.city,
      zipCode: ad.zip_code,
      country: ad.country,
    },
    description: ad.description,
    adType: ad.ad_type,
  });
  return adProto;
};

export const returnResponseError = (
  requestId: string,
  error: Error,
): Uint8Array => {
  const response = Response.fromPartial({
    requestId,
    error: {
      errorCode: 400,
      errorMessage: error.message,
    },
  });
  const encoded = Response.encode(response).finish();
  return encoded;
};

export enum NatsMethodRequested {
  CREATE = 'create',
  FIND = 'find',
  FIND_ONE = 'findOne',
  UPDATE = 'update',
  REMOVE = 'remove',
}
