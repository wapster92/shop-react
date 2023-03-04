import { ConnectionOptions } from 'typeorm';

import { join } from 'path';
import {UsersModel} from "../modules/users/models/users.model";
import {RefreshTokensModel} from "../modules/authorization/models/refresh-tokens.model";
import {RolesModel} from "../modules/roles/models/roles.model";
import {UploadModel} from "../modules/upload/models/upload.model";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv-flow').config({
  purge_dotenv: true,
  silent: true,
  path: join(__dirname, '..', '..'),
});

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'shop',
  synchronize: false,
  migrations: ['src/migrations/*.ts'],
  migrationsTableName: 'migrations',
  migrationsRun: false,
  cli: {
    migrationsDir: 'src/migrations',
  },
  logging: false,
  entities: [UsersModel, RefreshTokensModel, RolesModel, UploadModel],
  subscribers: [],
  useUTC: true,
};

export = config;
