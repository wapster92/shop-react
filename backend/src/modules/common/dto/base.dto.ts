import { ApiProperty } from '@nestjs/swagger';

export abstract class BaseDto {
  @ApiProperty({ description: 'Уникальный номер записи в базе данных' })
  id?: number;
  @ApiProperty({ description: 'Время создания записи' })
  createdAt?: Date;
  @ApiProperty({ description: 'Время обновления записи' })
  updatedAt?: Date;
  @ApiProperty({ description: 'Время удаления записи' })
  deletedAt?: Date | null;
}
