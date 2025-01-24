export type Contact = {
  id: string;
  name: string;
  image?: string;
  phoneNumber: string;
  biography: string;
};

export type ContactItem = {
  id: string;
  name: string;
  image?: string;
};

export type PaginatedData<T> = {
  items: T[];
  total: number;
  page: number;
};
