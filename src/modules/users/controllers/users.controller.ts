import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from '@nestjs/common';

import { CreateUserDto, UpdateUserDto } from './../dto';
import { UsersService } from './../services';
import { User } from './../entities';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUserss(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserById(id);
  }

  @Post()
  createTimeRecord(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  @Put(':id')
  updateTimeRecordById(
    @Param('id') id: string,
    @Body() timeRecord: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, timeRecord);
  }

  @Delete(':id')
  deleteTimeRecordById(@Param('id') id: string) {
    return this.usersService.removeUser(id);
  }
}
