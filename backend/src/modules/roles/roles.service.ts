import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { RolesModel } from './models/roles.model';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RolesModel)
    private readonly rolesEntityRepository: Repository<RolesModel>,
  ) {}
}

export class RolesCrudService extends TypeOrmCrudService<RolesModel> {
  constructor(@InjectRepository(RolesModel) repo) {
    super(repo);
  }
}
