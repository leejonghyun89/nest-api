import { Connection, EntityRepository, Repository } from 'typeorm';

import { Address } from 'address/entity/address.entity';

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {}

export const AddressRepositoryProvider = {
  provide: 'AddressRepository',
  useFactory: (connection: Connection) =>
    connection.getCustomRepository(AddressRepository),
  inject: [Connection],
};
