import { useEffect } from 'react';
import useFetchContactList from '../hooks/useFetchContactList';

const DashboardBootstrap: React.FC = () => {
  const fetchContactList = useFetchContactList();

  useEffect(() => {
    fetchContactList();
  }, [fetchContactList]);

  return <></>;
};

export default DashboardBootstrap;
