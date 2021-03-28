import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryandExitController } from './entryandExit.controller';
import { EntryandExitRepository } from './entryandExit.repository';
import { EntryandExitService } from './entryandExit.service';

@Module({
  imports: [TypeOrmModule.forFeature([EntryandExitRepository])],
  providers: [EntryandExitService],
  controllers: [EntryandExitController],
})
export class EntryandExitModule {}
