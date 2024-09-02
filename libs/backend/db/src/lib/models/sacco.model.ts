import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'saccos', underscored: true })
export class SaccoModel extends Model<SaccoModel> {

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name?: string;
}
