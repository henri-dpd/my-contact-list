import { ContactItem } from '@/core/types/contact';
import { PaginatedData } from '@/core/types/service';

interface ISetData {
  type: 'SET_DATA';
  payload: PaginatedData<ContactItem>;
}
interface ISetSearch {
  type: 'SET_SEARCH';
  payload: string;
}
interface ISetPage {
  type: 'SET_PAGE';
  payload: number;
}
interface IClean {
  type: 'CLEAN';
}

export type Action = ISetData | ISetSearch | ISetPage | IClean;
