import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateAddress } from 'address/dto/address.dto';
import { Address } from 'address/entity/address.entity';
import { AddressRepository } from 'address/repository/address.repository';
import { User } from 'user/entity/user.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressRepository)
    private readonly addressRepository: AddressRepository,
  ) {}

  public async createAddress(createAddress: CreateAddress): Promise<Address> {
    const address = new Address();
    address.city = createAddress.city;
    address.street = createAddress.street;
    address.zipCode = createAddress.zipCode;

    return await this.addressRepository.save(address);
  }

  public async createAddressByUser(address: Address): Promise<void> {
    await this.addressRepository.save(address);
  }

  public async deleteAddressByUser(user: User): Promise<void> {
    const address = await user.address;
    const addressIds = address.map((item) => item.id);

    await this.addressRepository.delete(addressIds);
  }
}
