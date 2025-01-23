import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../core/components/Loading/Loading';

const Root: React.FC = () => {
  return (
    <Suspense fallback={<Loading loading />}>
      <Outlet />
    </Suspense>
  );
};

export default Root;
