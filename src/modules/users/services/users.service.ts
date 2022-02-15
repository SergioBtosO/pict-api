import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateUserDto, UpdateUserDto } from './../dto';
import { User } from './../entities';
import { UsersDao } from './../dao';

@Injectable()
export class UsersService {
  constructor(private readonly usersDao: UsersDao) {}

  async getUsers(): Promise<User[]> {
    return await this.usersDao.getAll();
  }

  async getUserById(id: string): Promise<User> {
    const User = await this.usersDao.getOne(id);
    if (!User) {
      throw new NotFoundException('Registro no encontrado!');
    }
    return User;
  }

  async getUserByDocument(number_document: string): Promise<User> {
    const User = await this.usersDao.getOneWhere({
      number_document,
    });
    if (!User) {
      throw new NotFoundException('Registro no encontrado!');
    }
    return User;
  }

  async createUser(createUser: CreateUserDto) {
    const User = await this.usersDao.create(createUser);
    return await this.usersDao.save(User);
  }

  async updateUser(id: string, updateUser: UpdateUserDto) {
    const User = await this.usersDao.getOne(id);
    if (!User) {
      throw new NotFoundException('Registro no encontrado!');
    }
    User.name = updateUser.name;
    User.last_name = updateUser.last_name;
    User.type_document = updateUser.type_document;
    User.number_document = updateUser.number_document;
    User.status = updateUser.status;
    User.password = updateUser.password;
    return await this.usersDao.update(id, User);
  }

  async removeUser(id: string) {
    return await this.usersDao.delete(id);
  }
}
