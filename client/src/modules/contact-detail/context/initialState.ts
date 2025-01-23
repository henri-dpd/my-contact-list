import { Contact } from '@/core/types/contact';

export interface ContactDetailState {
  contact?: Contact;
}

export const initialState: ContactDetailState = {
  contact: undefined,
};
