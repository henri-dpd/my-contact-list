import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './core/router/router';
import LoadingProvider from './core/components/Loading/LoadingProviders';
import ErrorBoundary from './core/components/error/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <LoadingProvider>
        <RouterProvider router={router} />
      </LoadingProvider>
    </ErrorBoundary>
  );
}

export default App;
