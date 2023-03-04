import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { BaseDto } from '../../common/dto/base.dto';
import { RolesModel } from '../../roles/models/roles.model';

interface RefreshTokens {
  id: number;
  token: string;
  userId: number;
}

export class UsersDto extends BaseDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  @Exclude()
  password: string;
  @ApiProperty({ isArray: true })
  roles: string[];
  @ApiProperty()
  refreshTokens: RefreshTokens[];
}
