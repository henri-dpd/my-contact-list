import React from 'react';
interface DialogProps {
  title?: string;
  open: boolean;
  actions: React.ReactNode;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ title, open, actions, children }) => {
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

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative bg-grey transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <h3 className="text-xl text-f9f9f9 font-bold mb-1 pl-4 pt-8">
              {title}
            </h3>
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">{children}</div>
            <div className="px-4 py-3 sm:flex sm:flex-row sm:px-6 gap-4 justify-center">
              {actions}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;
