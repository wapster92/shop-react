import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { BaseModel } from '../../common/models/base.model';
import { RolesModel } from '../../roles/models/roles.model';
import * as bcrypt from 'bcrypt';
import { RefreshTokensModel } from '../../authorization/models/refresh-tokens.model';
import { UploadModel } from '../../upload/models/upload.model';

@Entity({ name: 'users' })
export class UsersModel extends BaseModel {
  @Column({ unique: true })
  username: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({ default: null })
  firstName: string;
  @Column({ default: null })
  lastName: string;
  @Column({ default: null })
  middleName: string;
  @Column({ default: null })
  phone: string;
  @ManyToMany(() => RolesModel)
  @JoinTable({ name: 'user_roles' })
  roles: RolesModel[];
  @OneToMany(() => RefreshTokensModel, (refreshTokens) => refreshTokens.user)
  refreshTokens: RefreshTokensModel[];
  @OneToOne(() => UploadModel)
  @JoinColumn()
  photo: UploadModel;
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (!!this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
