import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import { Address } from 'address/entity/address.entity';
import { BaseEntity } from 'common';

@Entity({ name: 'user', schema: 'nest_db' })
/**
 * Data Mapper 패턴 : Repository 이용하여 객체를 CRUD 사용
 */
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment', {
    name: 'user_id',
  })
  id: number;

  @Column({ length: 20, name: 'user_name' })
  username: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  password: string;

  @OneToMany(() => Address, (address) => address.user, {
    lazy: true,
    cascade: true,
  })
  @JoinColumn({ name: 'user_id' })
  address: Promise<Address[]> | Address[];
}
