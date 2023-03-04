import { Module } from '@nestjs/common';
import { UsersCrudService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModel } from './models/users.model';
import { UploadModel } from '../upload/models/upload.model';

// import { UserRolesEntity } from '../entities/userRoles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersModel])],
  providers: [UsersCrudService],
  controllers: [UsersController],
})
export class UsersModule {}
