import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'stops' })
export class StopModel extends Model<StopModel> {

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name?: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  lat?: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  lng?: string
}
