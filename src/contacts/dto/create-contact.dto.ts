/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { IsCustomPhoneNumber } from 'src/common/validator/IsPhoneNumber';

export class CreateContactDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 50, {
    message: 'Name have to has a length from 3 and up to 50 characters',
  })
  name: string;

  @IsNotEmpty()
  @IsCustomPhoneNumber()
  phone: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsString()
  @IsOptional()
  biography: string;
}
