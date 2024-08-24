import { Module } from '@nestjs/common';
import { RoutesController } from './route.controller';
import { RoutesService } from './services/routes.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { RouteModel, StopModel } from '@sf/backend/db';

@Module({
  imports: [
    SequelizeModule.forFeature([
      RouteModel,
      StopModel
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
