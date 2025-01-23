import { PaginatedData, ContactItem } from "@/core/types/contact";

export interface DashboardState extends PaginatedData<ContactItem> {
  search?: string;
}

export const initialState: DashboardState = {
  items: [],
  total: 0,
  page: 0,
  search: undefined,
};
