import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UsersModel } from '../../users/models/users.model';

@Entity()
export class RefreshTokensModel {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UsersModel, (user) => user.refreshTokens)
  user: UsersModel;

  @Column({ type: 'text' })
  token: string;
}
