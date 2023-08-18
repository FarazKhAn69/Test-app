import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity, UserPreferenceEntity, UserTokenEntity } from 'src/user/entites';
import { UserPreferenceService, UserService, UserTokenService } from 'src/user/services';
import { UserPreferenceController } from 'src/user/controllers';

@Module({
imports: [TypeOrmModule.forFeature([UserEntity, UserPreferenceEntity, UserTokenEntity])],
exports: [UserService, UserTokenService, UserPreferenceService],
providers: [UserService, UserTokenService, UserPreferenceService],
controllers: [UserPreferenceController]
})
export class UserModule {}
