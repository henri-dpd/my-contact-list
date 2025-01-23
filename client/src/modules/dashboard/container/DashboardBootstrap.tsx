import { useEffect } from 'react';
import { contactList } from '../mock/contactList';
import { useDashboardContext } from '../context/useDashboardContext';

const DashboardBootstrap: React.FC = () => {
  const { dispatch } = useDashboardContext();

  useEffect(() => {
    dispatch({
      type: 'SET_DATA',
      payload: { items: contactList, page: 1, total: 3 },
    });
  }, []);

  return <></>;
};

export default DashboardBootstrap;
