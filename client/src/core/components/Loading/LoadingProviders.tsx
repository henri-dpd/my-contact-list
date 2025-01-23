import { ReactNode, useState } from 'react';
import LoadingContext from './LoadingContext';
import Loading from './Loading';

const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
      <Loading loading={isLoading} />
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
