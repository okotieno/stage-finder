import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoutesService } from './services/routes.service';
import { RouteModel } from '@sf/backend/db';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRouteDto } from './dto/create-route.dto';

@Controller('routes')
@ApiTags('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @ApiOperation({
    summary: 'Retrieve all routes',
  })
  @ApiResponse({ status: 200, description: 'List of routes.', type: [RouteModel] })
  @Get()
  async findAll() {
    return this.routesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RouteModel> {
    return this.routesService.findOne(id);
  }

  @ApiOperation({ summary: 'Create route' })
  @ApiBody({ type: CreateRouteDto , examples: {
      example1: {
        summary: 'A simple example',
        description: 'This is an example of a user creation request',
        value: {
          name: "14A",
          source: {
            name: "CBD Bus Station",
            lat: -1.2882596,
            lng: 36.8281883
          },
          terminus: {
            name: "Strathmore University",
            lat: -1.3089602,
            lng: 36.8094744
          },
          destinationsServed: [
            {
              name: "CBD Bus Station",
              lat: -1.2882596,
              lng: 36.8281883
            },
            {
              name: "Nairobi West Mvuli",
              lat: -1.3062705,
              lng: 36.8223411
            },
            {
              name: "Strathmore University",
              lat: -1.3089602,
              lng: 36.8094744
            }
          ],
          sacco: {
            name: "West Sacco"
          }
        },
      },
    }})
  @Post()
  async create(@Body() createRouteDto: CreateRouteDto) {

    return this.routesService.create(createRouteDto);
  }
}
