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
    const routes = await this.routeModel.findAll({include: [StopModel]});

    // Fetch and attach stop details for each route
    const routePromises = routes.map(async route => {
      const source = await this.stopModel.findOne({ where: { id: route.sourceStopId } });
      const terminus = await this.stopModel.findOne({ where: { id: route.terminusStopId } });
      return {
        id: route.id,
        name: route.name,
        source: {
          id: source?.id,
          name: source?.name,
          lat: source?.lat,
          lng: source?.lng,
        },
        terminus: {
          id: terminus?.id,
          name: terminus?.name,
          lat: terminus?.lat,
          lng: terminus?.lng,
        },
        stops: route.destinationsServed.map((item) => ({
          id: item?.id,
          name: item?.name,
          lat: item?.lat,
          lng: item?.lng,
        }))
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
