import {
  Controller,
  UseFilters,
  Get,
  InternalServerErrorException,
  Post,
  Body,
} from '@nestjs/common';
import { CreateEntryandExitDto } from './dto/create-entryandExit.dto';
import { Entryandexit } from './entryandExit.entity';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../http-exception.filter';
import { EntryandExitService } from './entryandExit.service';

@ApiTags('entryandExit')
@Controller('entryandExit')
export class EntryandExitController {
  constructor(private entryandExitService: EntryandExitService) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  @ApiOkResponse({ type: CreateEntryandExitDto })
  @ApiBody({ type: CreateEntryandExitDto })
  async createUser(
    @Body() createEntryandExitDto: CreateEntryandExitDto,
  ): Promise<Entryandexit> {
    const user = await this.entryandExitService.createUser(
      createEntryandExitDto,
    );
    return user;
  }

  @Get()
  @UseFilters(new HttpExceptionFilter())
  @ApiOkResponse({ type: [CreateEntryandExitDto] })
  async getUser(): Promise<Entryandexit[]> {
    const entryandexit = await this.entryandExitService.getUser();
    return entryandexit;
  }
}
