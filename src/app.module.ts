import { Module } from '@nestjs/common';

import { TimeRecordsModule } from './modules/time-records/time-records.module';
import { DatabaseModule } from './modules/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { CostCentersModule } from './modules/cost-centers/cost-centers.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    TimeRecordsModule,
    UsersModule,
    AuthModule,
    ProjectsModule,
    CostCentersModule,
  ],
})
export class AppModule {
  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = parseInt(this.configService.get('PORT'));
  }
}
