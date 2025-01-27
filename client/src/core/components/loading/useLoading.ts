import { useContext } from 'react';
import LoadingContext, { LoadingContextProps } from './LoadingContext';

export const useLoading = (): LoadingContextProps => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
export default useLoading;
