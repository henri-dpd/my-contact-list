import React, { useState, ReactNode } from 'react';
import AlertDialog from './AlertDialog';
import { AlertDialogContext } from './AlertDialogContext';
import { Variant } from '@/core/types/theme';

interface AlertDialogProviderProps {
  children: ReactNode;
}

export const AlertDialogProvider: React.FC<AlertDialogProviderProps> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogVariant, setDialogVariant] = useState<Variant>('light');
  const [dialogMessage, setDialogMessage] = useState('');

  const showAlert = (
    title: string,
    message: string,
    variant: Variant = 'light',
  ) => {
    setDialogTitle(title);
    setDialogMessage(message);
    setDialogVariant(variant);
    setOpen(true);
  };

  const handleClose = () => {
    setDialogTitle('');
    setDialogMessage('');
    setDialogVariant('light');
    setOpen(false);
  };

  return (
    <AlertDialogContext.Provider value={{ showAlert }}>
      {children}
      <AlertDialog
        open={open}
        title={dialogTitle}
        onAcept={handleClose}
        variant={dialogVariant}
        message={dialogMessage}
      />
    </AlertDialogContext.Provider>
  );
};
