import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CostCentersService } from './services';
import { CostCentersController } from './controllers';
import { CostCenter } from './entities';
import { CostCentersDao } from './dao/cost-centers.dao';
import { UsersModule } from '../users/users.module';
import { UsersService } from './../users/services';
import { UsersDao } from './../users/dao';
import { User } from './../users/entities';
@Module({
  imports: [TypeOrmModule.forFeature([CostCenter, User]), UsersModule],
  providers: [CostCentersService, CostCentersDao, UsersService, UsersDao],
  controllers: [CostCentersController],
})
export class CostCentersModule {}
