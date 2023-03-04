import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../common/models/base.model';

@Entity({ name: 'uploads' })
export class UploadModel extends BaseModel {
  @Column()
  name: string;

  @Column()
  fileName: string;

  @Column()
  mimetype: string;

  @Column({ nullable: true, default: null })
  ext: string;

  @Column({ nullable: true })
  size: number;

  @Column()
  path: string;
}
