import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {
  RouteModel

} from './models';
import { dbConfig } from './config/db.config';
import { StopModel } from './models/stop.model';
@Module({
  imports: [
    SequelizeModule.forRoot({
      ...dbConfig,
      logging: false,
      models: [
        RouteModel,
        StopModel
      ],
      sync: {
        force: process.env['SF_ENVIRONMENT'] === 'development',
        alter: process.env['SF_ENVIRONMENT'] === 'development',
      },
      synchronize: process.env['SF_ENVIRONMENT'] === 'development',
      autoLoadModels: process.env['SF_ENVIRONMENT'] === 'development',
    }),
  ],
})
export class DbModule {}
