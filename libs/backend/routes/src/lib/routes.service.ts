import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RouteModel } from '@sf/backend/db';

@Injectable()
export class RoutesService {
  constructor(
    @InjectModel(RouteModel)
    private readonly routeModel: typeof RouteModel
  ) {}

  async findAll(): Promise<RouteModel[]> {
    return this.routeModel.findAll();
  }

  async findOne(id: string): Promise<RouteModel> {
    const route = await this.routeModel.findByPk(id);
    if (!route) {
      throw new NotFoundException(`Route with id ${id} not found`);
    }
    return route;
  }
}
