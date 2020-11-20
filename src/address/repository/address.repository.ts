import { Address } from 'address/entity/address.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository()
export class AddressRepository extends Repository<Address> {}
