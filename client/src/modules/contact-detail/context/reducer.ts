import { Action } from './actions';
import { ContactDetailState } from './initialState';

export const ContactDetailReducer = (
  state: ContactDetailState,
  action: Action,
): ContactDetailState => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, contact: action.payload };
    default:
      return state;
  }
};
