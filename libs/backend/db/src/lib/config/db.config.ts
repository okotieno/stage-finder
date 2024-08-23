import { SequelizeOptions } from 'sequelize-typescript';

export const dbConfig = {
  dialect: process.env[
    'SF_DATABASE_DIALECT'
    ] as SequelizeOptions['dialect'],
  host: process.env['SF_DATABASE_HOST'],
  port: Number(process.env['SF_DATABASE_PORT']),
  username: process.env['SF_DATABASE_USERNAME'],
  password: process.env['SF_DATABASE_PASSWORD'],
  database: process.env['SF_DATABASE_DATABASE']
};
