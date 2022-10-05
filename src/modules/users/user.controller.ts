/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

  // private userService = new UserService();
  constructor(private userService: UserService) {}
  
  @Post()
  public create(@Body() users: User): User {
       const userCreated = this.userService.create(users);
       return userCreated;
  }

  @Get(':username')
  public searchByUsername(@Param('username') username: string): User {
       const userFound = this.userService.searchByUsername(username);
       return userFound;
  }
  
}
