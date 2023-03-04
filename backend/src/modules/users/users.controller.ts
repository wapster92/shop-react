import { Controller, Get } from '@nestjs/common';
import { UsersCrudService } from './users.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { UsersModel } from './models/users.model';
import { UsersDto } from './dto/users.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('Пользователи')
@Crud({
  model: {
    type: UsersDto,
  },
  dto: {
    create: CreateUserDto,
  },
  query: {
    join: {
      roles: {
        eager: true,
      },
      refreshTokens: {
        eager: true,
      },
      photo: {
        eager: true,
      },
    },
  },
})
@Controller('users')
export class UsersController implements CrudController<UsersModel> {
  constructor(public service: UsersCrudService) {}
}
