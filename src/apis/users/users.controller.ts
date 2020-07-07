import { Controller, Body, Post } from '@nestjs/common';

import CreateUserDto from './create.user.dto';

import UserService from './user.service';

import UserEntity from './user.entity';

@Controller('users')
export default class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  create(@Body() createUserDto: CreateUserDto): UserEntity {
    return this.userService.save(createUserDto);
  }
}