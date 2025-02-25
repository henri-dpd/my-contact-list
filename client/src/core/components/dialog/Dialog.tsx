import React, { useEffect } from 'react';
import { ColorTheme, Variant } from '@/core/types/theme';

const DIALOG_THEME: Record<Variant, ColorTheme> = {
  light: {
    bg: 'bg-white',
    color: 'text-dark',
    border: 'border-dark',
  },
  dark: { bg: 'bg-darkgrey', color: 'text-light', border: 'border-dark' },
  success: { bg: 'bg-success', color: 'text-light', border: 'border-dark' },
  error: { bg: 'bg-error', color: 'text-dark', border: 'border-dark' },
  primary: {
    bg: 'bg-primary',
    color: 'text-darkgrey',
    border: 'border-primarystrong',
  },
  secondary: {
    bg: 'bg-secondary',
    color: 'text-light',
    border: 'border-light',
  },
};
interface DialogProps {
  title?: string;
  open: boolean;
  onClose?: VoidFunction;
  actions?: React.ReactNode;
  children: React.ReactNode;
  variant?: Variant;
}

const Dialog: React.FC<DialogProps> = ({
  title,
  open,
  actions,
  variant = 'dark',
  children,
  onClose,
}) => {
  useEffect(() => {
    document.getElementById('dialog-content')?.focus();
  }, [open]);

  return (
    <dialog
      className="relative z-10"
      aria-labelledby="modal-title"
      aria-modal="true"
      open={open}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-25 transition-opacity"
        aria-hidden="true"
      ></div>

      <div
        className="fixed inset-0 z-10 w-screen overflow-y-auto"
        onMouseDown={onClose}
      >
        <div className="relative flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            id="dialog-content"
            className={`relative z-20 ${DIALOG_THEME[variant].bg} ${DIALOG_THEME[variant].border} ${DIALOG_THEME[variant].color} transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg`}
            tabIndex={0}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-1 px-4 pt-8">{title}</h3>
            <div className="px-4 px-4 sm:p-6 sm:pb-4">{children}</div>
            <div className="px-4 py-3 flex sm:flex-row sm:px-6 gap-4 justify-center flex-wrap">
              {actions}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;
