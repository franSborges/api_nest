/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { IsUserAreadyExistConstraint } from './decorators/is-name-user-already-exists.validator';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, IsUserAreadyExistConstraint],
})
export class UserModule {}
