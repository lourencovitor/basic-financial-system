import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Name', example: 'String' })
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'It has to be of type string' })
  name: string;

  @ApiProperty({ description: 'Email', example: 'String' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsString({ message: 'It has to be of type string' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Password', example: 'String' })
  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'It has to be of type string' })
  password: string;
}
