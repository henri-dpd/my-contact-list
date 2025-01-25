import React from 'react';
import Dialog from '../Dialog';
import Button from '../../button/Button';
import { Variant } from '@/core/types/theme';

interface AlertDialogProps {
  open: boolean;
  variant?: Variant;
  title: string;
  message: string;
  onClose: VoidFunction;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  open,
  title,
  message,
  variant = 'light',
  onClose
}) => {
  return (
    <Dialog
      title={title}
      open={open}
      variant={variant}
      onClose={onClose}
      actions={
        <Button variant={variant} onClick={onClose}>
          Acept
        </Button>
      }
    >
      <div className="text-center">{message}</div>
    </Dialog>
  );
};

export default AlertDialog;
