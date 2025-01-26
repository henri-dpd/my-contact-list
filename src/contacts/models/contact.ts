import { PartialType } from '@nestjs/mapped-types';

type ContactResponseType = {
  id: string;
  name: string;
  image?: string;
  phone: string;
  biography: string;
};

export class ContactResponse {
  id: string;
  name: string;
  image?: string;
  phone: string;
  biography: string;

  constructor(contact: ContactResponseType) {
    this.id = contact.id;
    this.name = contact.name;
    this.image = contact.image
      ? Buffer.from(contact.image).toString()
      : undefined;
    this.phone = contact.phone;
    this.biography = contact.biography;
  }
}

export class PartialContactResponse extends PartialType(ContactResponse) {}
