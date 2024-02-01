import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('Jobs')
@Unique(['job_title', 'category'])
export class JobsEntity {
  @PrimaryGeneratedColumn('uuid')
  job_id: string;

  @Column({ nullable: false })
  job_title: string;

  @Column({ nullable: false })
  category: number;
}
