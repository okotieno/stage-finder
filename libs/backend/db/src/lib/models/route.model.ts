import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'routes' })
export class RouteModel extends Model<RouteModel> {

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  line?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  routeName?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  destination?: string
}
