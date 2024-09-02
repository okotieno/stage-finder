import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { StopModel } from './stop.model';
import { SaccoModel } from './sacco.model';

@Table({ tableName: 'routes', underscored: true })
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
  terminusStopId?: number;

  terminus?: StopModel

  @BelongsToMany(() => StopModel, {
    foreignKeyConstraint: true,
    through: 'route_stop',
    foreignKey: 'route_id',
    otherKey: 'stop_id'
  })
  destinationsServed!: StopModel[];

  @ForeignKey(() => SaccoModel)
  @Column
  saccoId?: number;

  sacco?: SaccoModel

}
