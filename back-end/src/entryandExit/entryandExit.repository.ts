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

  async getEntryandExit(): Promise<Entryandexit[]> {
    const entryandexit = await this.find();
    return entryandexit;
  }

  async searchEntryandExit(query: any): Promise<any> {
    const entryandexit = await this.createQueryBuilder('entryandExit')
      .where('entryandExit.date = :date', {
        date: query.date,
      })
      .where('entryandExit.entryandExitType = :entryandExitType', {
        entryandExitType: query.entryandExitType,
      })
      .getMany();
    return entryandexit;
  }
}
