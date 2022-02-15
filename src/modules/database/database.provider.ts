import { ConfigService } from '@nestjs/config';
import { DynamicModule } from '@nestjs/common';
import { Environment } from '../../common/enum';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  async useFactory(config: ConfigService) {
    const isEnvironmentDev = config.get('NODE_ENV') !== Environment.Production;

    const dbConfig = {
      type: 'postgres',
      host: config.get('DB_HOST'),
      port: +config.get('DB_PORT'),
      username: config.get('DB_USER'),
      password: config.get('DB_PASSWORD'),
      database: config.get('DB_NAME'),
      autoLoadEntities: true,
      synchronize: isEnvironmentDev,
      logging: config.get('DB_LOGGING'),
    } as ConnectionOptions;

    return dbConfig;
  },
});
