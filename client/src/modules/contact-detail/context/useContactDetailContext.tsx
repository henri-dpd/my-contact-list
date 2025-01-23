import { useContext } from 'react';
import { ContactDetailContext } from './context';

export const useContactDetailContext = () => useContext(ContactDetailContext);
