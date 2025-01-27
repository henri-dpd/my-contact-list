import { ContactItem } from '@/core/types/contact';
import { PaginatedData } from '@/core/types/service';

export interface DashboardState extends PaginatedData<ContactItem> {
  search?: string;
  prevItems: ContactItem[]
}

export const initialState: DashboardState = {
  items: [],
  prevItems: [],
  total: 0,
  page: 0,
  search: undefined,
};
