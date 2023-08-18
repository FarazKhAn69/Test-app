import { BadRequestException } from '@nestjs/common';
import { registerDecorator, ValidationOptions } from 'class-validator';


type IsValidPasswordInterface = (object, propertyName?: string) => void;
export function IsValidPassword(
  property?: unknown,
  validationOptions?: ValidationOptions
): IsValidPasswordInterface {
  const PASSWORD_MIN_LENGTH = 12;
  const PASSWORD_MAX_LENGTH = 64;
  return (object = {}, propertyName = 'password'): void => {
    registerDecorator({
      name: 'isPasswordValid',
      target: object.constructor,
      propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: string) {
          if (value.length < PASSWORD_MIN_LENGTH) {
            throw new BadRequestException({
              variables: {
                details: `${propertyName} should be minimum ${PASSWORD_MIN_LENGTH} characters long`
              }
            });
          } else if (value.length > PASSWORD_MAX_LENGTH) {
            throw new BadRequestException({
              variables: {
                details: `${propertyName} should be maximum ${PASSWORD_MAX_LENGTH} characters long`
              }
            });
          } else if (!/(?=.*[A-Z])/.test(value)) {
            throw new BadRequestException({
              variables: {
                details: `${propertyName} must contain at least 1 upper-case letter`
              }
            });
          } else if (!/(?=.*\d)/.test(value)) {
            throw new BadRequestException({
              variables: {
                details: `${propertyName} must contain at least 1 number`
              }
            });
          } else if (!/[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(value)) {
            throw new BadRequestException({
              variables: {
                details: `${propertyName} must contain at least 1 special character`
              }
            });
          } else {
            return true;
          }
        },
      },
    });
  };
}
