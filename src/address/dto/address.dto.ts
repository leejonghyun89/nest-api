import { ApiProperty } from '@nestjs/swagger';

export class CreateAddress {
  @ApiProperty()
  city: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  zipCode: string;
}

export class ResponseAddress {
  @ApiProperty()
  id: number;

  @ApiProperty()
  city: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  zipCode: string;
}
