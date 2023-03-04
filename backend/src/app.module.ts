import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './modules/roles/roles.module';

import { AuthModule } from './modules/authorization/auth.module';
import { JwtAuthGuard } from './modules/authorization/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { UploadModule } from './modules/upload/upload.module';
// const settings = require('../ormconfig.js');
import DataSource from './configs/db.config';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
@Module({
  imports: [
    UsersModule,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    TypeOrmModule.forRoot(DataSource),
    RolesModule,
    AuthModule,
    UploadModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
