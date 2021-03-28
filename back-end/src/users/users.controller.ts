import {
  Controller,
  Post,
  Body,
  UseFilters,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../http-exception.filter';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  @ApiOkResponse({ type: CreateUserDto })
  @ApiBody({ type: CreateUserDto })
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<CreateUserDto> {
    const user = await this.usersService.createUser(createUserDto);
    return user;
  }

  @Get()
  @UseFilters(new HttpExceptionFilter())
  @ApiOkResponse({ type: [CreateUserDto] })
  async getUser(): Promise<CreateUserDto[]> {
    const user = await this.usersService.getUser();
    return user;
  }

  @Get('/:userId')
  @UseFilters(new HttpExceptionFilter())
  @ApiOkResponse({ type: [CreateUserDto] })
  @ApiParam({ name: 'userId' })
  async getUserOne(@Param('userId') userId: string): Promise<CreateUserDto> {
    const user = await this.usersService.getUserOne(userId);
    return user;
  }

  @Put('/:userId')
  @UseFilters(new HttpExceptionFilter())
  @ApiOkResponse({ type: String })
  @ApiParam({ name: 'userId' })
  async updateUserOne(
    @Body() updateUserDto: UpdateUserDto,
    @Param('userId') userId: string,
  ): Promise<string> {
    await this.usersService.updateUser(userId, updateUserDto);
    return 'Successfully updated';
  }

  @Delete('/:userId')
  @UseFilters(new HttpExceptionFilter())
  @ApiOkResponse({ type: String })
  @ApiParam({ name: 'userId' })
  async deleteUserOne(@Param('userId') userId: string): Promise<string> {
    await this.usersService.deleteUser(userId);
    return 'Successfully deleted';
  }
}
