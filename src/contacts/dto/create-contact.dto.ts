import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { FULL_NAME_REGEX } from 'src/common/constants/regex';
import { IsCustomPhoneNumber } from 'src/common/validator/IsPhoneNumber';

export class CreateContactDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 100, {
    message: 'Name have to has a length from 3 and up to 50 characters',
  })
  @Matches(FULL_NAME_REGEX)
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
