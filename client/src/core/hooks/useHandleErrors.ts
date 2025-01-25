import { useCallback } from 'react';
import { ResponseError } from '../types/service';

const useHandleErrors = () => {
  const handleError = useCallback((error: ResponseError) => {
    alert(`Error: ${error.message}`);
  }, []);

  return handleError;
};

export default useHandleErrors;
