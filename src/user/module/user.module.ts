import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule, AddressService } from 'address';
import { AddressRepository } from 'address/repository/address.repository';
import { UserController } from 'user/controller/user.controller';
import { User } from 'user/entity/user.entity';
import { UserService } from 'user/service/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AddressModule],
  controllers: [UserController],
  providers: [UserService, AddressService, AddressRepository],
  exports: [AddressService, AddressRepository],
})
export class UserModule {}
