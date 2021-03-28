import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { email, name, password } = createUserDto;
    const salt = await bcrypt.genSalt();
    const user = this.create();
    user.email = email;
    user.name = name;
    user.password = await this.hashPassword(password, salt);
    try {
      await user.save();
      delete user.password;
      return user;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('Endereço de email já está em uso');
      } else {
        throw new InternalServerErrorException(
          'Erro ao salvar o usuário no banco de dados',
        );
      }
    }
  }
  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  async getUser(): Promise<User[]> {
    const users = await this.find();
    return users;
  }

  async getUserOne(userId: string): Promise<User> {
    const user = await this.findOneOrFail(userId);
    return user;
  }

  async updateUserOne(
    userId: string,
    UpdateUserDto: UpdateUserDto,
  ): Promise<any> {
    const user = await this.update(userId, UpdateUserDto);
    return user;
  }

  async deleteUserOne(userId: string): Promise<any> {
    try {
      const user = await this.delete(userId);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
