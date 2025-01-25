import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './core/router/router';
import LoadingProvider from './core/components/Loading/LoadingProviders';
import ErrorBoundary from './core/components/error/ErrorBoundary';
import { AlertDialogProvider } from './core/components/dialog/alert/AlertDialogProvider';

function App() {
  return (
    <ErrorBoundary>
      <LoadingProvider>
        <AlertDialogProvider>
          <RouterProvider router={router} />
        </AlertDialogProvider>
      </LoadingProvider>
    </ErrorBoundary>
  );
}

export default App;
