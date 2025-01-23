import React, { createContext } from 'react';
import { Action } from './actions';
import { ContactDetailState, initialState } from './initialState';

export const ContactDetailContext = createContext<{
  state: ContactDetailState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});
