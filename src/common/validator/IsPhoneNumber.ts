/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { isValidPhoneNumber } from 'libphonenumber-js';
@ValidatorConstraint({ async: false })
class IsCustomPhoneNumberConstraint implements ValidatorConstraintInterface {
  validate(phoneNumber: string) {
    return typeof phoneNumber === 'string' && isValidPhoneNumber(phoneNumber);
  }

  defaultMessage() {
    return 'Phone Number Invalid';
  }
}

export function IsCustomPhoneNumber(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsCustomPhoneNumberConstraint,
    });
  };
}
