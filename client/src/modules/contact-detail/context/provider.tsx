import { ReactNode, useReducer } from 'react';
import { initialState } from './initialState';
import { ContactDetailReducer } from './reducer';
import { ContactDetailContext } from './context';

export const ContactDetailProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(ContactDetailReducer, initialState);

  return (
    <ContactDetailContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactDetailContext.Provider>
  );
};
