import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from './../../users/entities';
import { UsersService } from './../../users/services';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(number_document: string, password: string) {
    const user = await this.usersService.getUserByDocument(number_document);
    if (user && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const { id, ...rest } = user;
    const payload = { sub: id };

    return {
      ...rest,
      accessToken: await this.jwtService.sign(payload),
    };
  }
}
