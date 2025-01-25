import { useCallback } from 'react';
import { ResponseError } from '../types/service';
import { useAlertDialog } from '../components/dialog/alert/useAlertDialog';
import { Variant } from '../types/theme';

const useHandleErrors = () => {
  const { showAlert } = useAlertDialog();
  const handleError = useCallback(
    (error: ResponseError, variant: Variant = 'error') => {
      showAlert('', `Error: ${error.message}`, variant);
    },
    [],
  );

  return handleError;
};

export default useHandleErrors;
