import { Controller, Post, Get, UseGuards } from '@nestjs/common';
import { User } from 'src/common/decorators';
import { User as UserEntity } from './../../users/entities';
import { LocalAuthGuard, JwtAuthGuard } from '../guards';
import { AuthService } from '../services';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@User() user: UserEntity) {
    const data = await this.authService.login(user);
    return { message: 'Ingreso exitoso!', data };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile() {
    return 'tus datos';
  }

  @UseGuards(JwtAuthGuard)
  @Get('refresh-token')
  async refreshToken(@User() user: UserEntity) {
    const data = await this.authService.login(user);
    return { message: 'refresh exitoso', data };
  }
}
