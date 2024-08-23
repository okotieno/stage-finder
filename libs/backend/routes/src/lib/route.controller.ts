import { Controller, Get, Param } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RouteModel } from '@sf/backend/db';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('routes')
@ApiTags('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @ApiOperation({ summary: 'Retrieve all routes' })
  @ApiResponse({ status: 200, description: 'List of routes.', type: [RouteModel] })
  @Get()
  async findAll() {
    return this.routesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RouteModel> {
    return this.routesService.findOne(id);
  }
}
