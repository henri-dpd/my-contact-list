import ErrorPage from '@/pages/Error';
import React, { useState, useEffect } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [error, setError] = useState('');

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error(event);
      setError(event.message);
    };

    const handlePromiseRejection = (event: PromiseRejectionEvent) => {
      console.error(event);
      setError(event.reason?.message || 'Unhandled promise rejection');
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handlePromiseRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handlePromiseRejection);
    };
  }, []);

  if (error) {
    // You can customize the error message here
    return <ErrorPage message={error} />;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
