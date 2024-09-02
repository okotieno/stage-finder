import { Module } from '@nestjs/common';
import { RoutesController } from './route.controller';
import { RoutesService } from './services/routes.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { RouteModel, SaccoModel, StopModel } from '@sf/backend/db';
import { RouteStopModel } from '@sf/backend/db';

@Module({
  imports: [
    SequelizeModule.forFeature([
      RouteModel,
      StopModel,
      RouteStopModel,
      SaccoModel
    ])
  ],
  controllers: [
    RoutesController
  ],
  providers: [
    RoutesService
  ],
  exports: [],
})
export class RoutesModule {}
