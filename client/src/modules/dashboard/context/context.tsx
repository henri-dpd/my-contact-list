import React, { createContext } from 'react';
import { DashboardState, initialState } from './initialState';
import { Action } from './actions';

export const DashboardContext = createContext<{
  state: DashboardState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});
