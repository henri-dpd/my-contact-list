export type Contact = {
  id: string;
  name: string;
  phoneNumber: number;
  biography: string;
};

export type ContactItem = {
  id: string;
  name: string;
};

export type PaginatedData<T> = {
  items: T[];
  total: number;
  page: number;
};
