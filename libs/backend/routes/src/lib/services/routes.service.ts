import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RouteModel, RouteStopModel, StopModel } from '@sf/backend/db';
import { CreateRouteDto } from '../dto/create-route.dto';
import { SaccoModel } from '@sf/backend/db';

@Injectable()
export class RoutesService {
  constructor(
    @InjectModel(RouteModel)
    private readonly routeModel: typeof RouteModel,
    @InjectModel(StopModel)
    private readonly stopModel: typeof StopModel,
    @InjectModel(RouteStopModel)
    private readonly routeStopModel: typeof RouteStopModel,
    @InjectModel(SaccoModel)
    private readonly saccoModel: typeof SaccoModel
  ) {
  }

  async findAll() {
    const routes = await this.routeModel.findAll({ include: [StopModel] });

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
          lng: source?.lng
        },
        terminus: {
          id: terminus?.id,
          name: terminus?.name,
          lat: terminus?.lat,
          lng: terminus?.lng
        },
        stops: route.destinationsServed.map((item) => ({
          id: item?.id,
          name: item?.name,
          lat: item?.lat,
          lng: item?.lng
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

  async create(createRouteDto: CreateRouteDto) {
    const [source] = await this.stopModel.findOrCreate({
      where: {
        name: createRouteDto.source?.name,
        lat: createRouteDto.source?.lat,
        lng: createRouteDto.source?.lng
      }
    });

    const [terminus] = await this.stopModel.findOrCreate({
      where: {
        name: createRouteDto.source?.name,
        lat: createRouteDto.source?.lat,
        lng: createRouteDto.source?.lng
      }
    });

    const [sacco] = await this.routeModel.findOrCreate({
      where: {
        name: createRouteDto.sacco?.name
      }
    });

    const [route] = await this.routeModel.findOrCreate({
      where: {
        name: createRouteDto.name,
        sourceStopId: source.id,
        terminusStopId: terminus.id,
        saccoId: sacco.id,
      }
    });

    for (let j = 0; j < Number(createRouteDto.destinationsServed?.length); j++) {
      const destination = createRouteDto.destinationsServed?.[j];
      const [stop] = await this.stopModel.findOrCreate({
        where: {
          name: destination?.name,
          lat: destination?.lat,
          lng: destination?.lng
        }
      });
      await this.routeStopModel.findOrCreate({
        where: {
          routeId: route?.id,
          stopId: stop.id
        }
      });
    }
  }
}
