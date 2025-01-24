import { PartialType } from '@nestjs/mapped-types';

export class ContactResponse {
  id: string;
  name: string;
  image?: string;
  phone: string;
  biography: string;
}

export class PartialContactResponse extends PartialType(ContactResponse) {}
