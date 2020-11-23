import { BaseEntity } from 'common';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from 'user/entity/user.entity';

@Entity({ name: 'address', schema: 'nest_db' })
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn('increment', {
    name: 'address_id',
  })
  id: number;

  @Column({ length: 20 })
  city: string;

  @Column({ length: 20 })
  street: string;

  @Column({ length: 50, name: 'zip_code' })
  zipCode: string;

  @ManyToOne(() => User, (user) => user.address, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
