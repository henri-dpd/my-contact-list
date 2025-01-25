import { Variant } from '@/core/types/theme';
import { createContext } from 'react';

interface AlertDialogContextProps {
  showAlert: (title: string, message: string, variant?: Variant) => void;
}

export const AlertDialogContext = createContext<
  AlertDialogContextProps | undefined
>(undefined);
