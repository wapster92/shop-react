import { BaseModel } from '../../common/models/base.model';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { UsersModel } from '../../users/models/users.model';

@Entity({ name: 'roles' })
export class RolesModel extends BaseModel {
  @Column()
  role: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToMany(() => UsersModel, (users) => users.roles)
  @JoinTable({ name: 'user_roles' })
  users: UsersModel[];
}
