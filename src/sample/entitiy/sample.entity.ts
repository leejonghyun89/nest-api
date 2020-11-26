import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Active Record 패턴 : BaseEntity를 이용해 쿼리 메소드를 Entity에 선언하는 것
 */
@Entity({ name: 'sample', schema: 'nest_db' })
export class Sample extends BaseEntity {
  @PrimaryGeneratedColumn('increment', {
    name: 'sample_id',
  })
  id: number;

  @Column({ length: 20, name: 'sample_name' })
  sampleName: string;

  static findBySampleName(sampleName: string) {
    return this.createQueryBuilder('sample')
      .where('sample.sampleName = :sampleName', { sampleName })
      .getMany();
  }
}
