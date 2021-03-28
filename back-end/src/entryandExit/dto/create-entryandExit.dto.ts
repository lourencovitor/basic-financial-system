import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEntryandExitDto {
  @ApiProperty({
    description: 'User Id',
    example: 'xxxx-xxxx-xxx-xxxxx',
  })
  @IsNotEmpty({ message: 'User Id required' })
  @IsString({ message: 'It has to be of type string' })
  userId = '';

  @ApiProperty({ description: 'Value', example: 50 })
  @IsNotEmpty({ message: 'Value is required' })
  @IsNumber()
  value: number;

  @ApiProperty({ description: 'Date', example: '2021-08-25' })
  @IsNotEmpty({ message: 'Value is required' })
  @IsDateString()
  date: string = new Date().toISOString();

  @ApiProperty({ description: 'entryandExitType', example: 'input' })
  @IsNotEmpty({ message: 'entryandExitType required' })
  @IsString({ message: 'It has to be of type string' })
  entryandExitType = '';
}
