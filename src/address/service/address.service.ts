import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateAddress, UpdateAddress } from 'address/dto/address.dto';
import { Address } from 'address/entity/address.entity';
import { AddressRepository } from 'address/repository/address.repository';

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

  public async getAddressById(id: number): Promise<Address> {
    return this.addressRepository.findOne(id);
  }

  public async updateAddressById(id: number, updateAddress: UpdateAddress) {
    this.addressRepository.update(
      { id },
      {
        city: updateAddress.city,
        street: updateAddress.street,
        zipCode: updateAddress.zipCode,
      },
    );
  }

  public async deleteAddresById(id: number) {
    const address = await this.getAddressById(id);
    this.addressRepository.delete(address);
  }
}
