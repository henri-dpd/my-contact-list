/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsPhoneNumber, IsString, Length } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 50, {
    message: 'Name have to has a length from 3 and up to 50 characters',
  })
  name: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @IsString()
  image?: string;

  @IsString()
  biography: string;
}
