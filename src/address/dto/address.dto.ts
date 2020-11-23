import { ApiProperty } from '@nestjs/swagger';

export class CreateAddress {
  @ApiProperty()
  city: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  zipCode: string;
}

export class UpdateAddress {
  @ApiProperty()
  city: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  zipCode: string;
}

export class ResponseAddress {
  @ApiProperty()
  addressId: number;

  @ApiProperty()
  created: Date;

  @ApiProperty()
  city: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  zipCode: string;
}
