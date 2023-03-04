import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModel } from '../users/models/users.model';
import { RolesModel } from '../roles/models/roles.model';
import { RefreshTokensModel } from './models/refresh-tokens.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersModel, RolesModel, RefreshTokensModel]),
    JwtModule.register({ secret: process.env.JWT_SECRET }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
