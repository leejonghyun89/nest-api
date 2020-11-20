import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUser, UpdateUser } from 'user/dto/user.dto';
import { UserService } from 'user/service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
    this.userService = userService;
  }

  @Post()
  public async createUser(@Body() createUser: CreateUser) {
    return this.userService.createUser(createUser);
  }

  @Get()
  public async getUsers(
    @Param('page') page: number = 1,
    @Param('pageSize') pageSize: number = 10,
  ) {
    return this.userService.getUsers(page, pageSize);
  }

  @Get(':id')
  public async getUserById(@Param('id') id: number) {
    return this.userService.getUserForResponseById(id);
  }

  @Put(':id')
  public async updateUserById(
    @Param('id') id: number,
    @Body() updateUser: UpdateUser,
  ) {
    this.userService.updateUserById(id, updateUser);
  }

  @Delete(':id')
  public async deleteUserById(@Param('id') id: number) {
    this.userService.deleteUserById(id);
  }
}
