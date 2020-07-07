import { Module, INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';

import UsersController from './users.controller';

import UserService from './user.service';

const options = new DocumentBuilder()
  .setTitle('User example')
  .setDescription('The user API description')
  .setVersion('1.0')
  .addTag('users')
  .build();

export const userDocument = (app: INestApplication): OpenAPIObject => (
  SwaggerModule.createDocument(app, options, {
    include: [UserModule],
  })
);

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UserService],
})
export default class UserModule {}
