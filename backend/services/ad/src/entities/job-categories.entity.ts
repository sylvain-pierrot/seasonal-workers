import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { JobSubCategoryEntity } from '@entities/job-subcategories.entity';
import { JobCategory } from '@proto/models/job-category';

@Entity('Jobs')
@Unique(['job_title', 'category'])
export class JobCategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  job_id: string;

  @Column({ nullable: false })
  job_title: string;

  @ManyToOne(() => JobSubCategoryEntity, { eager: true })
  @JoinColumn({ name: 'category' })
  category: JobSubCategoryEntity;

  public static arrayToProto(job: JobCategoryEntity[]): JobCategory[] {
    return job.map((job) => {
      return {
        jobId: job.job_id,
        jobTitle: job.job_title,
        category: JobSubCategoryEntity.toProto(job.category),
      };
    });
  }

  public static toProto(job: JobCategoryEntity): JobCategory {
    return {
      jobId: job.job_id,
      jobTitle: job.job_title,
      category: JobSubCategoryEntity.toProto(job.category),
    };
  }
}
