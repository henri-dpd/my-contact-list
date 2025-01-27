/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { PHONE_REGEX } from '../constants/regex';

@ValidatorConstraint({ async: false })
class IsCustomPhoneNumberConstraint implements ValidatorConstraintInterface {
  validate(phoneNumber: string) {
    const phoneRegex = PHONE_REGEX;
    return typeof phoneNumber === 'string' && phoneRegex.test(phoneNumber);
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
