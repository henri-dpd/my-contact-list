import ApiService from '@/core/service/api.service.ts';
import { Contact } from '@/core/types/contact';
import { PaginatedData } from '@/core/types/service';
import { CreateContactDTO, ListContactDTO } from '../types/contactTypes';

class ContactService extends ApiService {
  constructor() {
    super('contacts');
  }

  getContactList = async (filters?: ListContactDTO) => {
    const searchParams = new URLSearchParams();
    if (filters)
      for (const [key, value] of Object.entries(filters))
        if (value) searchParams.append(key, value.toString());
    return this.get<PaginatedData<Contact>>(`?${searchParams.toString()}`);
  };

  getContactDetail = async (id: string | number) => {
    return this.get<Contact>(`/${id}`);
  };

  edirContact = async (id: string | number, newContact: Partial<Contact>) => {
    return this.patch<Contact>(`/${id}`, newContact);
  };

  createContact = async (newContact: CreateContactDTO) => {
    return this.post<Contact>(`/`, newContact);
  };

  deleteContact = async (id: string | number): Promise<void> => {
    return this.delete(`/${id}`);
  };
}
const contactService = new ContactService();

export default contactService;
