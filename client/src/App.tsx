import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './core/router/router';
import LoadingProvider from './core/components/Loading/LoadingProviders';

function App() {
  return (
    <LoadingProvider>
      <RouterProvider router={router} />
    </LoadingProvider>
  );
}

export default App;
