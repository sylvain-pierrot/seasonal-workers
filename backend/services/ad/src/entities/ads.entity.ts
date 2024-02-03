import {
  Ad,
  AdTypeEnum,
  CountryEnum,
  SalaireCurrencyEnum,
} from '@proto/models/ad';
import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('Ad')
@Unique(['id', 'user_id', 'title', 'jobTitle', 'categoryTitle'])
export class AdEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true, name: 'job_title' })
  jobTitle: string;

  @Column({ nullable: true, name: 'category_title' })
  categoryTitle: string;

  @Column({ type: 'date', nullable: true })
  start_date: Date;

  @Column({ type: 'date', nullable: true })
  end_date: Date;

  @Column({ type: 'numeric', nullable: true })
  salary_amount: number;

  @Column({ nullable: true })
  salary_currency: SalaireCurrencyEnum;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  zip_code: string;

  @Column({ nullable: true })
  country: CountryEnum;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  ad_type: AdTypeEnum;

  public static toProto(ad: AdEntity): Ad {
    const adProto = Ad.fromPartial({
      id: ad.id,
      userId: ad.user_id,
      title: ad.title,
      jobCategory: {
        jobTitle: ad.jobTitle,
        categoryTitle: ad.categoryTitle,
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
  }

  public static arrayToProto(ads: AdEntity[]): Ad[] {
    return ads.map((ad) => {
      return AdEntity.toProto(ad);
    });
  }

  public static fromProto(ad: Ad): AdEntity {
    const adEntity = new AdEntity();
    adEntity.user_id = ad.userId;
    adEntity.title = ad.title;
    adEntity.jobTitle = ad.jobCategory.jobTitle;
    adEntity.categoryTitle = ad.jobCategory.categoryTitle;
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
  }
}
