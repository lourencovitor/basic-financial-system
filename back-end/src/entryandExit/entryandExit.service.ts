import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntryandExitRepository } from './entryandExit.repository';
import { CreateEntryandExitDto } from './dto/create-entryandExit.dto';
import { Entryandexit } from './entryandExit.entity';

@Injectable()
export class EntryandExitService {
  constructor(
    @InjectRepository(EntryandExitRepository)
    private entryandExitRepository: EntryandExitRepository,
  ) {}

  async createUser(
    createEntryandExitDto: CreateEntryandExitDto,
  ): Promise<Entryandexit> {
    return this.entryandExitRepository.createEntryandExit(
      createEntryandExitDto,
    );
  }

  async getUser(): Promise<Entryandexit[]> {
    return this.entryandExitRepository.getUser();
  }
}
