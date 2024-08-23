import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { StopModel } from './stop.model';

@Table({ tableName: 'routes' })
export class RouteModel extends Model<RouteModel> {

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: true,
  })
  line?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name?: string;

  @ForeignKey(() => StopModel)
  @Column
  sourceStopId?: number;

  source?: StopModel

  @ForeignKey(() => StopModel)
  @Column
  destinationStopId?: number;

  destination?: StopModel

}
