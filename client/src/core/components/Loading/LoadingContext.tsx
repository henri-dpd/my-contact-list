import { createContext } from 'react';

export interface LoadingContextProps {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(
  undefined,
);

export default LoadingContext;
