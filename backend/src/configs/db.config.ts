import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { config } from 'dotenv-flow';
import { UsersModel } from '../modules/users/models/users.model';
import { RolesModel } from '../modules/roles/models/roles.model';
import { RefreshTokensModel } from '../modules/authorization/models/refresh-tokens.model';
import { UploadModel } from '../modules/upload/models/upload.model';

config({
  purge_dotenv: true,
  silent: true,
  path: join(__dirname, '..', '..', '..'),
});

const dataSource: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  migrations: [join(__dirname, '..', 'src', 'migrations/*{.ts, .js}')],
  migrationsTableName: 'migrations',
  migrationsRun: false,
  cli: {
    migrationsDir: 'src/migrations',
  },
  entities: [UsersModel, RefreshTokensModel, RolesModel, UploadModel],
  subscribers: [],
  useUTC: true,
};
export default dataSource;

/*export function getConfig(host: string) {
  return {
    type: 'postgres',
    host,
    port: 5432,
    username: 'root',
    password: 'root',
    database: 'core',
    synchronize: true,
    migrations: [join(__dirname, '..', 'src', 'migrations/!*{.ts, .js}')],
    migrationsTableName: 'migrations',
    migrationsRun: false,
    cli: {
      migrationsDir: 'src/migrations',
    },
    logging: false,
    entities: [join(__dirname, '..', 'src', 'modules/!**!/!*.model{.ts, .js}')],
    subscribers: [],
    useUTC: true,
  } as ConnectionOptions;
}*/
