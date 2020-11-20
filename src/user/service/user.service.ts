import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateUser,
  ResponseUser,
  ResponseUserPagination,
  UpdateUser,
} from 'user/dto/user.dto';
import { User } from 'user/entity/user.entity';

// import { Address, ResponseAddress } from 'address';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public async createUser(createUser: CreateUser): Promise<ResponseUser> {
    const beforeUser = new User();
    beforeUser.email = createUser.email;
    beforeUser.username = createUser.username;
    beforeUser.password = createUser.password;

    // const beforeAddress = new Address();
    // beforeAddress.city = createUser.address.city;
    // beforeAddress.street = createUser.address.street;
    // beforeAddress.zipCode = createUser.address.zipCode;

    // beforeUser.address = [beforeAddress];

    const user = await this.userRepository.save(beforeUser);
    // const address = await user.address;

    return {
      userId: user.id,
      username: user.username,
      email: user.email,
      // address,
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
        // const address = await item.address;

        return {
          userId: item.id,
          username: item.username,
          email: item.email,
          // address: address.map((item) => {
          //   return {
          //     id: item.id,
          //     city: item.city,
          //     street: item.street,
          //     zipCode: item.zipCode,
          //   };
          // }),
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
    // const address = await user.address;

    // const responseAddress: ResponseAddress[] = address.map((item) => {
    //   return {
    //     id: item.id,
    //     city: item.city,
    //     street: item.street,
    //     zipCode: item.zipCode,
    //   };
    // });

    return {
      userId: user.id,
      username: user.username,
      email: user.email,
      // address: responseAddress,
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
