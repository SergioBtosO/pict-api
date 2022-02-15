import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './../services';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'number_document',
      paswordsField: 'password',
    });
  }

  async validate(number_document: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(number_document, password);
    if (!user)
      throw new UnauthorizedException('Usuario o contraseña no coinciden');
    return user;
  }
}
