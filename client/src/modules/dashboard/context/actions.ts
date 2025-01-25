import { DashboardState } from './initialState';

interface ISetData {
  type: 'SET_DATA';
  payload: DashboardState;
}
interface ISetSearch {
  type: 'SET_SEARCH';
  payload: string;
}
interface ISetPage {
  type: 'SET_PAGE';
  payload: number;
}

export type Action = ISetData | ISetSearch | ISetPage;
