import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const Root = lazy(() => import('../../pages/Root'));
const ErrorPage = lazy(() => import('../../pages/Error'));
const DashboardContainer = lazy(
  () => import('../../modules/dashboard/container/DashboardContainer'),
);
const ContactDetailContainer = lazy(
  () => import('../../modules/contact-detail/container/ContactDetailContainer'),
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardContainer />,
      },
      {
        path: ':id',
        element: <ContactDetailContainer />,
      },
    ],
  },
]);
