import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { UserEntity } from 'src/user/entites';

@Entity({ name: 'user_token' })
export class UserTokenEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: false, type: 'timestamp' })
  expiredAt: Date;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @Column({nullable: false})
  token: string;

  @ManyToOne(() => UserEntity, user => user.userTokens)
  user?: UserEntity;

  @Column({nullable: false})
  userId: string;
}