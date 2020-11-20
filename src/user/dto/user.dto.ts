// import { CreateAddress, ResponseAddress } from 'address';

export class CreateUser {
  username: string;
  email: string;
  password: string;
  // address: CreateAddress;
}

export class ResponseUser {
  userId: number;
  username: string;
  email: string;
  // address: ResponseAddress[];
}

export class UpdateUser {
  username: string;
  email: string;
  password: string;
}

export class ResponseUserPagination {
  totalCount: number;
  page: number;
  pageSize: number;
  data: ResponseUser[];
}
