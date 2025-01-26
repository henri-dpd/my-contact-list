export type Contact = {
  id: string;
  name: string;
  image?: string;
  phone: string;
  biography: string;
};

export type ContactItem = {
  id: string;
  name: string;
  image?: string;
};

export type ContactSchema = {
  name: string;
  image?: File[];
  phone: string;
  biography?: string;
};

export const defaultContactSchema: ContactSchema = {
  name: '',
  image: [],
  phone: '',
  biography: '',
};
