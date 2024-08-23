import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RouteModel } from '@sf/backend/db';
import { StopModel } from '@sf/backend/db';

@Injectable()
export class RoutesService {
  constructor(
    @InjectModel(RouteModel)
    private readonly routeModel: typeof RouteModel,
    @InjectModel(StopModel)
    private readonly stopModel: typeof StopModel
  ) {
  }

  async findAll() {
    const routes = await this.routeModel.findAll();

    // Fetch and attach stop details for each route
    const routePromises = routes.map(async route => {
      const source = await this.stopModel.findOne({ where: { id: route.sourceStopId } });
      const destination = await this.stopModel.findOne({ where: { id: route.destinationStopId } });
      return {
        id: route.id,
        name: route.name,
        source: {
          id: source?.id,
          name: source?.name,
          lat: source?.lat,
          lng: source?.lng,
        },
        destination: {
          id: destination?.id,
          name: destination?.name,
          lat: destination?.lat,
          lng: destination?.lng,
        },
      };
    });

    return Promise.all(routePromises);
  }

  async findOne(id: string): Promise<RouteModel> {
    const route = await this.routeModel.findByPk(id);
    if (!route) {
      throw new NotFoundException(`Route with id ${id} not found`);
    }
    return route;
  }
}
