import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { RolesModel } from './models/roles.model';
import { RolesCrudService } from './roles.service';
import { AuthGuard } from '../authorization/auth.guard';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Роли')
@Crud({
  model: {
    type: RolesModel,
  },
  dto: {
    create: CreateRoleDto,
  },
  routes: {
    getManyBase: {
      // decorators: [AuthGuard(['USER'])],
    },
  },
})
@Controller('roles')
export class RolesController implements CrudController<RolesModel> {
  constructor(public service: RolesCrudService) {}
}
