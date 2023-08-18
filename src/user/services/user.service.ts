import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/entites';
import { UpdateUserInterface, UserInterface } from 'src/user/interfaces';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  findByEmail(email: string): Promise<UserEntity | null> {
    return this.usersRepository.findOneBy({ email });
  }

  findById(id: string): Promise<UserEntity | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async createUser(user: UserEntity): Promise<UserInterface>{
     const newUser = await  this.usersRepository.create(user);
     await this.usersRepository.save(newUser);
     return newUser
  }

  async updateUser(id:string, userInput: UpdateUserInterface): Promise<UserInterface>{
    const { ...userData } = userInput;
    const payload = await this.usersRepository.preload({ id, ...userData });
    if (!payload) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    const savedUser = await this.usersRepository.save(payload);
    return savedUser;
 }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}