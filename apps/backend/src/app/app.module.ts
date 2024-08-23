import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@sf/backend/db';
import { RoutesModule } from '@stage-finder/routes';

@Module({
  imports: [
    DbModule,
    RoutesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
