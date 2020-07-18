import { Module } from '@nestjs/common';

import AppController from './app.controller';
import AppService from './app.service';

import UserModule from './apis/users';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
