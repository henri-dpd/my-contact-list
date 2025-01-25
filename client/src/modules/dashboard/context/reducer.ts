import { Action } from './actions';
import { DashboardState } from './initialState';

export const DashboardReducer = (
  state: DashboardState,
  action: Action,
): DashboardState => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, ...action.payload };
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
