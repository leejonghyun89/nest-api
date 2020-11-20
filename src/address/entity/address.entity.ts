import { User } from 'user';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'address', schema: 'nest_db' })
export class Address {
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
