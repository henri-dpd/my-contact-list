import { useEffect } from 'react';
import useFetchContactDetail from '../hooks/useFetchContactDetail';

interface Props {
  id?: string;
}

const ContactDetailBootstrap: React.FC<Props> = ({ id }) => {
  const fetchContactDetail = useFetchContactDetail(id);

  useEffect(() => {
    fetchContactDetail();
  }, []);

  return <></>;
};

export default ContactDetailBootstrap;
