import { Injectable } from '@nestjs/common';

import UserEntity from './user.entity';

import CreateUserDto from './create.user.dto';

@Injectable()
export default class UserService {
  /**
   * Save an user
   *
   * @param {CreateUserDto} data
   * @returns {UserEntity}
   * @example
   * this.userService.save({email: 'email'})
   */
  save(data: CreateUserDto): UserEntity {
    const user = new UserEntity();
    user.id = 1;
    user.email = data.email;

    return user;
  }
}
