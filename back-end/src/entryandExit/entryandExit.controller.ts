import {
  Controller,
  UseFilters,
  Get,
  InternalServerErrorException,
  Post,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import { CreateEntryandExitDto } from './dto/create-entryandExit.dto';
import { Entryandexit } from './entryandExit.entity';
import { ApiBody, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
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

  @Get('/:userId')
  @UseFilters(new HttpExceptionFilter())
  @ApiOkResponse({ type: [CreateEntryandExitDto] })
  async getEntryandExit(
    @Param('userId') userId: string,
  ): Promise<Entryandexit[]> {
    const entryandexit = await this.entryandExitService.getEntryandExit(userId);
    return entryandexit;
  }

  @Get('/search')
  @UseFilters(new HttpExceptionFilter())
  @ApiOkResponse({ type: [CreateEntryandExitDto] })
  @ApiQuery({
    enum: ['input', 'output'],
    name: 'entryandExitType',
    required: false,
  })
  @ApiQuery({
    type: 'string',
    name: 'date',
    required: false,
  })
  async searchEntryandExit(@Query() query: string): Promise<Entryandexit[]> {
    const entryandexit = await this.entryandExitService.searchEntryandExit(
      query,
    );
    return entryandexit;
  }
}
