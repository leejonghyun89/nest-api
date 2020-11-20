import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AddressController } from 'address/controller/address.controller';
import { Address } from 'address/entity/address.entity';
import {
  AddressRepository,
  AddressRepositoryProvider,
} from 'address/repository/address.repository';
import { AddressService } from 'address/service/address.service';
@Module({
  imports: [TypeOrmModule.forFeature([Address, AddressRepository])],
  controllers: [AddressController],
  providers: [AddressService, AddressRepository, AddressRepositoryProvider],
  exports: [AddressService, AddressRepository],
})
export class AddressModule {}
