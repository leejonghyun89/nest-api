import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AddressModule } from 'address/module/address.module';
import { UserController } from 'user/controller/user.controller';
import { User } from 'user/entity/user.entity';
import {
  UserRepository,
  UserRepositoryProvider,
} from 'user/repository/user.repository';
import { UserService } from 'user/service/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository]), AddressModule],
  controllers: [UserController],
  providers: [UserService, UserRepositoryProvider],
})
export class UserModule {}
