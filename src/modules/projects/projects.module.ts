import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectsService } from './services';
import { ProjectsController } from './controllers';
import { Project } from './entities';
import { ProjectsDao } from './dao';
import { UsersModule } from './../users/users.module';
import { UsersService } from './../users/services';
import { UsersDao } from './../users/dao';
import { User } from './../users/entities';
@Module({
  imports: [TypeOrmModule.forFeature([Project, User]), UsersModule],
  providers: [ProjectsService, ProjectsDao, UsersService, UsersDao],
  controllers: [ProjectsController],
})
export class ProjectsModule {}
