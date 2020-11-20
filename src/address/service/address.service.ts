import { Injectable } from '@nestjs/common';
import { AddressRepository } from 'address/repository/address.repository';
import { User } from 'user/entity/user.entity';

@Injectable()
export class AddressService {
  constructor(private readonly addressRepository: AddressRepository) {
    this.addressRepository = addressRepository;
  }

  public async deleteAddressByUser(user: User): Promise<void> {
    const address = await user.address;
    const addressIds = address.map((item) => item.id);

    await this.addressRepository.delete(addressIds);
  }
}
