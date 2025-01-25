import React from 'react';
import Dialog from '../Dialog';
import Button from '../../button/Button';
import { Variant } from '@/core/types/theme';

interface AlertDialogProps {
  open: boolean;
  onAcept: VoidFunction;
  variant?: Variant;
  title: string;
  message: string;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  open,
  title,
  message,
  variant = 'light',
  onAcept,
}) => {
  return (
    <Dialog
      title={title}
      open={open}
      variant={variant}
      actions={
        <Button variant={variant} onClick={onAcept}>
          Acept
        </Button>
      }
    >
      <div className="text-center">{message}</div>
    </Dialog>
  );
};

export default AlertDialog;
