import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { User } from './../users/entities/user.entity';
import { UsersModule } from './../users/users.module';
import { AuthService } from './services';
import { UsersService } from './../users/services';
import { UsersDao } from './../users/dao';
import { LocalStrategy, JwtStrategy } from './strategies';
import { AuthController } from './controllers';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UsersModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '300s' },
      }),
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, UsersService, UsersDao],
  controllers: [AuthController],
})
export class AuthModule {}
