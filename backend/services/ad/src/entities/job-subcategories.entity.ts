import { JobSubCategory } from '@proto/models/job-category';
import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('JobCategories')
@Unique(['category_title'])
export class JobSubCategoryEntity {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column({ nullable: false })
  category_title: string;

  public static toProto(category: JobSubCategoryEntity): JobSubCategory {
    return {
      categoryId: category.category_id,
      categoryTitle: category.category_title,
    };
  }
}
