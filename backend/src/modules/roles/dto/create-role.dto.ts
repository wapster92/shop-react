import { ApiProperty } from '@nestjs/swagger';

export abstract class CreateRoleDto {
  @ApiProperty({ description: 'Системное имя роли' })
  role: string;
  @ApiProperty()
  name: string;
  @ApiProperty({ description: 'Описание роли' })
  description?: string;
}
