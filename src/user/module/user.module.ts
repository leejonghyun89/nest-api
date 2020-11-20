import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'user/controller/user.controller';
import { User } from 'user/entity/user.entity';
import { UserService } from 'user/service/user.service';

// import {
//   Address,
//   AddressModule,
//   AddressRepository,
//   AddressService,
// } from 'address';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
