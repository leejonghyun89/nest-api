// import { Address } from 'address';
import { Address } from 'address/entity/address.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'user', schema: 'nest_db' })
export class User {
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
