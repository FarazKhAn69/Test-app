import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTokenEntity } from 'src/user/entites';
import { UserInterface, UserTokenInterface } from 'src/user/interfaces';


@Injectable()
export class UserTokenService {
  constructor(
    @InjectRepository(UserTokenEntity)
    private usersRepository: Repository<UserTokenEntity>,
  ) {}

  findByToken(token: string): Promise<UserTokenEntity | null> {
    return this.usersRepository.findOneBy({ token });
  }

  async findByUserId(userId: string): Promise<UserTokenEntity | null> {
    return this.usersRepository.findOne({ where: { userId } });
  }


  async createUserToken(user: UserTokenEntity): Promise<UserTokenInterface>{
     const newUserToken = await  this.usersRepository.create(user);
     await this.usersRepository.save(newUserToken);
     return newUserToken
  }
}