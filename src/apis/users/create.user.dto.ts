import {IsEmail, IsNotEmpty} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class CreateUserDto {
  @ApiProperty({
    description: 'The email of user',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
