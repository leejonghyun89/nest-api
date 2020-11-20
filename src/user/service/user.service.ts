import { Injectable } from '@nestjs/common';

import { CreateAddress, ResponseAddress } from 'address/dto/address.dto';
import { Address } from 'address/entity/address.entity';
import { AddressService } from 'address/service/address.service';
import {
  CreateUser,
  ResponseUser,
  ResponseUserPagination,
  UpdateUser,
} from 'user/dto/user.dto';
import { User } from 'user/entity/user.entity';
import { UserRepository } from 'user/repository/user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly addressService: AddressService,
  ) {}

  public async createUser(createUser: CreateUser): Promise<ResponseUser> {
    const address = await this.addressService.createAddress(createUser.address);

    const beforeUser = new User();
    beforeUser.email = createUser.email;
    beforeUser.username = createUser.username;
    beforeUser.password = createUser.password;
    beforeUser.address = [address];

    const user = await this.userRepository.save(beforeUser);

    return {
      userId: user.id,
      username: user.username,
      email: user.email,
      address: [
        {
          id: address.id,
          city: address.city,
          street: address.street,
          zipCode: address.zipCode,
        },
      ],
    };
  }

  public async createAddressByUser(
    id: number,
    createAddress: CreateAddress,
  ): Promise<ResponseUser> {
    const user = await this.getUserById(id);

    const newAddress = new Address();
    newAddress.city = createAddress.city;
    newAddress.street = createAddress.street;
    newAddress.zipCode = createAddress.zipCode;
    newAddress.user = user;

    await this.addressService.createAddressByUser(newAddress);

    const afterUser = await this.getUserById(id);
    const afterAddress = await afterUser.address;

    return {
      userId: user.id,
      username: user.username,
      email: user.email,
      address: afterAddress,
    };
  }

  public async getUsers(
    page: number,
    pageSize: number,
  ): Promise<void | ResponseUserPagination> {
    const totalCount = await this.userRepository.count();
    const skip = (page - 1) * pageSize;

    const users = await this.userRepository
      .createQueryBuilder('user')
      .skip(skip)
      .limit(pageSize)
      .getMany();

    return Promise.all(
      users.map(async (item) => {
        const address = await item.address;

        return {
          userId: item.id,
          username: item.username,
          email: item.email,
          address: address.map((item) => {
            return {
              id: item.id,
              city: item.city,
              street: item.street,
              zipCode: item.zipCode,
            };
          }),
        };
      }),
    )
      .then((res) => {
        return {
          totalCount,
          page,
          pageSize,
          data: res,
        };
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  public async getUserById(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  public async getUserForResponseById(id: number): Promise<ResponseUser> {
    const user = await this.userRepository.findOne(id);
    const address = await user.address;

    const responseAddress: ResponseAddress[] = address.map((item) => {
      return {
        id: item.id,
        city: item.city,
        street: item.street,
        zipCode: item.zipCode,
      };
    });

    return {
      userId: user.id,
      username: user.username,
      email: user.email,
      address: responseAddress,
    };
  }

  public async updateUserById(
    id: number,
    updateUser: UpdateUser,
  ): Promise<void> {
    this.userRepository.update(
      { id },
      {
        email: updateUser.email,
        username: updateUser.username,
        password: updateUser.password,
      },
    );
  }

  public async deleteUserById(id: number): Promise<void> {
    const user = await this.getUserById(id);
    this.userRepository.delete(user);
  }
}
