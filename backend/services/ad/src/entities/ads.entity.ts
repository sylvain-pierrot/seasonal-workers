import {
  Ad,
  AdTypeEnum,
  CountryEnum,
  SalaireCurrencyEnum,
} from '@proto/models/ads';
import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('ad')
@Unique(['id', 'user_id', 'title', 'category', 'sub_category'])
export class AdEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  sub_category: string;

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
}
