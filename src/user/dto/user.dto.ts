import { ApiProperty } from '@nestjs/swagger';

import { CreateAddress, ResponseAddress } from 'address/dto/address.dto';

export class CreateUser {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  address: CreateAddress;
}

export class ResponseUser {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  address: ResponseAddress[];
}

export class UpdateUser {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export class ResponseUserPagination {
  totalCount: number;
  page: number;
  pageSize: number;
  data: ResponseUser[];
}
