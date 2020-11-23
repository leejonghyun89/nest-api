import { Body, Controller, Delete, Param, Put } from '@nestjs/common';

import { UpdateAddress } from 'address/dto/address.dto';
import { AddressService } from 'address/service/address.service';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Put(':id')
  public async updateAddressById(
    @Param('id') id: number,
    @Body() updateAddress: UpdateAddress,
  ) {
    this.addressService.updateAddressById(id, updateAddress);
  }

  @Delete(':id')
  public async deleteAddressById(@Param('id') id: number) {
    this.addressService.deleteAddresById(id);
  }
}
