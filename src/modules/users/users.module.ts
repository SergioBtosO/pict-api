import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities';
import { UsersController } from './controllers';
import { UsersService } from './services';
import { UsersDao } from './dao';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UsersDao],
})
export class UsersModule {}
