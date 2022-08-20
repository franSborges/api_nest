/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
/* eslint-disable prettier/prettier */
@Injectable()
export class UserService {

  private users: Array<User> = [{
    id: 1,
    username: "Gab",
    email: "gab@email.com",
    password: "23423tw",
    full_name: "Gab Silva",
    created_at: new Date()
  }];

  public create(users: User): User {
    this.users.push(users);

    return users;
  }

  public searchByUsername(username: string): User{
     const userFound = this.users.find(user => user.username == username);
     return userFound;
  }
}
