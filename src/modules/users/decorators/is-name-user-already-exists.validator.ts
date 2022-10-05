/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { 
  registerDecorator,
  ValidationArguments,
  ValidationOptions, 
  ValidatorConstraint,
  ValidatorConstraintInterface 
 } from "class-validator";
import { UserService } from "../user.service";

@Injectable()
@ValidatorConstraint()
export class IsUserAreadyExistConstraint implements ValidatorConstraintInterface {
  constructor(private userService: UserService) {}
  validate(nameUser: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
   return !!!this.userService.searchByUsername(nameUser);
  }
}

export function IsNameUserAlreadyExists(ValidationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: ValidationOptions,
      constraints: [],
      validator: IsUserAreadyExistConstraint
    })
  }
}