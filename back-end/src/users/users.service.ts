import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.createUser(createUserDto);
  }

  async getUser(): Promise<User[]> {
    return this.userRepository.getUser();
  }

  async getUserOne(userId: string): Promise<User> {
    return this.userRepository.getUserOne(userId);
  }

  async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userRepository.updateUserOne(userId, updateUserDto);
  }

  async deleteUser(userId: string): Promise<User> {
    return this.userRepository.deleteUserOne(userId);
  }
}
