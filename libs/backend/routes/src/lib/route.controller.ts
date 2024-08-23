import { Controller, Get, Param } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RouteModel } from '@sf/backend/db';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Get()
  async findAll(): Promise<RouteModel[]> {
    return this.routesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RouteModel> {
    return this.routesService.findOne(id);
  }
}
