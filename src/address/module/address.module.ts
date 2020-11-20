import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'address/entity/address.entity';
import { AddressRepository } from 'address/repository/address.repository';
import { AddressController } from '../controller/address.controller';
import { AddressService } from '../service/address.service';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  controllers: [AddressController],
  providers: [AddressService, AddressRepository],
})
export class AddressModule {}
