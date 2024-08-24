import { Module } from '@nestjs/common';

import { DbModule } from '@sf/backend/db';
import { RoutesModule } from '@sf/backend/routes';

@Module({
  imports: [
    DbModule,
    RoutesModule
  ]
})
export class AppModule {}
