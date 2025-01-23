import { DashboardState } from './initialState';

interface ISetData {
  type: 'SET_DATA';
  payload: DashboardState;
}
interface ISetSearch {
  type: 'SET_SEARCH';
  payload: string;
}

export type Action = ISetData | ISetSearch;
