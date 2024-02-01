import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('JobCategories')
@Unique(['category_title'])
export class JobCategoriesEntity {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column({ nullable: false })
  category_title: string;
}
