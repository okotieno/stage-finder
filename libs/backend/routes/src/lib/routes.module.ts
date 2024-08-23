import { Module } from '@nestjs/common';
import { RoutesController } from './route.controller';
import { RoutesService } from './routes.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { RouteModel } from '@sf/backend/db';

@Module({
  imports: [
    SequelizeModule.forFeature([
      RouteModel
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
