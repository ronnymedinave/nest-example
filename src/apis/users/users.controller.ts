import { Controller, Body, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import CreateUserDto from './create.user.dto';

import UserService from './user.service';

import UserEntity from './user.entity';

@Controller('users')
export default class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  @ApiResponse({ status: 200, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 400, description: 'Invalid data'})
  create(@Body() createUserDto: CreateUserDto): UserEntity {
    return this.userService.save(createUserDto);
  }
}