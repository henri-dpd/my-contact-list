import { Action } from './actions';
import { DashboardState, initialState } from './initialState';

export const DashboardReducer = (
  state: DashboardState,
  action: Action,
): DashboardState => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, ...action.payload };
    case 'CLEAN':
      return { ...initialState, search: state.search };
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload,
        items: [],
        prevItems: [],
        page: 1,
      };
    case 'SET_PAGE':
      return {
        ...state,
        page: action.payload,
        items: [],
        prevItems: [...(state.prevItems ?? []), ...(state.items ?? [])],
      };
    default:
      return state;
  }
};
