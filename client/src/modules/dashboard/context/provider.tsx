import { ReactNode, useReducer } from 'react';
import { DashboardContext } from './context';
import { initialState } from './initialState';
import { DashboardReducer } from './reducer';

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(DashboardReducer, initialState);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

