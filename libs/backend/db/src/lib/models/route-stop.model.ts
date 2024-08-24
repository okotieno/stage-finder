import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { StopModel } from './stop.model';
import { RouteModel } from './route.model';

@Table({ tableName: 'route_stop', underscored: true })
export class RouteStopModel extends Model<RouteStopModel> {


  @ForeignKey(() => StopModel)
  @Column
  stopId?: number;

  @ForeignKey(() => RouteModel)
  @Column
  routeId?: number;

}
