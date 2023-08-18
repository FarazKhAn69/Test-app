import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPreferenceEntity } from 'src/user/entites';
import {  UserPreferenceInterface } from 'src/user/interfaces';


@Injectable()
export class UserPreferenceService {
  constructor(
    @InjectRepository(UserPreferenceEntity)
    private usersRepository: Repository<UserPreferenceEntity>,
  ) {}


  async createUserPreference(userPreference: UserPreferenceEntity): Promise<UserPreferenceInterface>{
     const newUserPreference = await  this.usersRepository.create(userPreference);
     await this.usersRepository.save(newUserPreference);
     return newUserPreference
  }
}