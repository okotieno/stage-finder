// db.module.test.js
import { DbModule } from './db.module';
import { SequelizeModule } from '@nestjs/sequelize';
import {
  CountryModel,
  LanguageModel,
  PermissionModel,
  ProductModel,
  RoleModel,
  RoleUserModel,
  UserModel,
  CountryLanguageUserModel,
  ShelfModel
} from './models';
import { SequelizeOptions } from 'sequelize-typescript';



jest.mock('@nestjs/sequelize');
jest.mock('./config/db.config', () =>({
  dbConfig: {
    dialect: 'postgres' as SequelizeOptions['dialect'],
    host: 'localhost',
    port: 5432,
    username: 'test_user',
    password: 'test_password',
    database: 'test_database'
  }

}));

describe('DbModule', () => {
  it('should configure Sequelize with proper options and include all models', () => {
    const mockedSequelizeModule = SequelizeModule.forRoot as jest.Mock;
    mockedSequelizeModule.mockReturnValue({
      providers: []
    });

    DbModule; // trigger module initialization

    const expectedModels = [
      PermissionModel,
      ProductModel,
      RoleModel,
      RoleUserModel,
      UserModel,
      LanguageModel,
      CountryModel,
      CountryLanguageUserModel,
      ShelfModel
    ];

    expect(mockedSequelizeModule).toHaveBeenCalledWith(expect.objectContaining({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'test_user',
      password: 'test_password',
      database: 'test_database',
      models: expect.arrayContaining(expectedModels)
    }));
  });
});
