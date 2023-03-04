import { Module } from '@nestjs/common';
import { RolesCrudService, RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModel } from './models/roles.model';

@Module({
  imports: [TypeOrmModule.forFeature([RolesModel])],
  providers: [RolesService, RolesCrudService],
  controllers: [RolesController],
})
export class RolesModule {}
