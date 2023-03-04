import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersModel } from './models/users.model';
// import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class UsersCrudService extends TypeOrmCrudService<UsersModel> {
  constructor(@InjectRepository(UsersModel) repo) {
    super(repo);
  }
}
