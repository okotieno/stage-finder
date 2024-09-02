import { Module } from '@nestjs/common';

import { DbModule } from '@sf/backend/db';
import { RoutesModule } from '@sf/backend/routes';
import { AppController } from './controllers/app.controller';

@Module({
  imports: [
    DbModule,
    RoutesModule
  ],
  controllers: [
    AppController,
  ]
})
export class AppModule {}
