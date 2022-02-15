import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TimeRecord } from './entities/time-record.entity';
import { TimeRecordsController } from './controllers';
import { TimeRecordsService } from './services';
import { UsersService } from './../users/services';
import { ProjectsService } from './../projects/services';
import { CostCentersService } from './../cost-centers/services';
import { TimeRecordsDao } from './dao';
import { UsersDao } from './../users/dao';
import { ProjectsDao } from './../projects/dao';
import { CostCentersDao } from './../cost-centers/dao';
import { ProjectsModule } from '../projects/projects.module';
import { UsersModule } from './../users/users.module';
import { CostCentersModule } from '../cost-centers/cost-centers.module';
import { User } from '../users/entities';
import { Project } from '../projects/entities';
import { CostCenter } from '../cost-centers/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([TimeRecord, User, Project, CostCenter]),
    UsersModule,
    ProjectsModule,
    CostCentersModule,
  ],
  controllers: [TimeRecordsController],
  providers: [
    TimeRecordsService,
    TimeRecordsDao,
    UsersService,
    UsersDao,
    ProjectsService,
    ProjectsDao,
    CostCentersService,
    CostCentersDao,
  ],
})
export class TimeRecordsModule {}
