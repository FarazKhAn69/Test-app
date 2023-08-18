import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { UserEntity } from 'src/user/entites';

@Entity({ name: 'user_preference' })
export class UserPreferenceEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({nullable: false, type: 'varchar' })
  title: string;

  @Column({nullable: false, type: 'varchar' })
  description: string;

  @ManyToOne(() => UserEntity, user => user.userPreferences)
  user?: UserEntity;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @Column({nullable: false})
  userId: string;
}