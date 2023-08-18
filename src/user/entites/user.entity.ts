import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { UserPreferenceEntity, UserTokenEntity } from 'src/user/entites';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({nullable: false, type: 'varchar' })
  fullName: string;

  @Column({ nullable: false, unique: true, type: 'varchar' })
  email: string;

  @Column({ nullable: false, type: 'timestamp' })
  dateOfBirth: Date;

  @Column({ nullable: false, type: 'varchar' })
  password: string;

  @Column({ default: false })
  isActive?: Boolean;

  @OneToMany(() => UserTokenEntity, userToken => userToken.user)
  userTokens?: UserTokenEntity[];

  @OneToMany(() => UserPreferenceEntity, userPreference => userPreference.user)
  userPreferences?: UserPreferenceEntity[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}