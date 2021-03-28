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
      const { userId, value, entryandExitType } = createEntryandExitDto;
      const user = await User.findOneOrFail(userId);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const entryandExit = this.create({
        user,
        value,
        entryandExitType,
      });
      await entryandExit.save();
      return entryandExit;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        'Erro ao salvar o entry and Exit no banco de dados',
      );
    }
  }

  async getUser(): Promise<Entryandexit[]> {
    const entryandexit = await this.find();
    return entryandexit;
  }
}
