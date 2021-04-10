import { InternalServerErrorException } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateEntryandExitDto } from './dto/create-entryandExit.dto';
import { Entryandexit } from './entryandExit.entity';

@EntityRepository(Entryandexit)
export class EntryandExitRepository extends Repository<Entryandexit> {
  async createEntryandExit(
    createEntryandExitDto: CreateEntryandExitDto,
  ): Promise<Entryandexit> {
    try {
      const { userId, value, entryandExitType, date } = createEntryandExitDto;
      const user = await User.findOneOrFail(userId);
      if (entryandExitType === 'input' || entryandExitType === 'output') {
        const entryandExit = this.create({
          user,
          value,
          date,
          entryandExitType,
        });
        await entryandExit.save();
        return entryandExit;
      } else {
        throw new InternalServerErrorException(
          'entryandExitType do not match the options',
        );
      }
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(
        'Erro ao salvar o entry and Exit no banco de dados',
      );
    }
  }

  async getEntryandExit(userId: string): Promise<Entryandexit[]> {
    try {
      const entryandexit = this.createQueryBuilder('entryandExit')
        .where('entryandExit.userId = :userId', { userId: userId })
        .orderBy('entryandExit.date', 'DESC')
        .getMany();
      return entryandexit;
    } catch (error) {
      console.log(error);
    }
  }

  async searchEntryandExit(query: any): Promise<any> {
    const where = () => {
      if (query.entryandExitType && query.date) {
        return {
          entryandExitType: query.entryandExitType,
          date: query.date,
        };
      } else if (query.entryandExitType) {
        return {
          entryandExitType: query.entryandExitType,
        };
      } else if (query.date) {
        return {
          date: query.date,
        };
      } else {
        return {};
      }
    };

    const entryandexit = await this.find({
      where: where(),
    });
    return entryandexit;
  }
}
