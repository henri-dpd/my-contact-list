export type ListContactDTO = {
  search?: string;
  page?: number;
};

export type CreateContactDTO = {
  name: string;
  phone: string;
  image?: string;
  biography?: string;
};
