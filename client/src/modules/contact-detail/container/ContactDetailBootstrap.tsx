import { useEffect } from 'react';
import { contactDetail } from '../mock/contactDetail';
import { useContactDetailContext } from '../context/useContactDetailContext';
import { useNavigate } from 'react-router-dom';

interface Props {
  id?: string;
}

const ContactDetailBootstrap: React.FC<Props> = ({ id }) => {
  const { dispatch } = useContactDetailContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) navigate(-1);
    dispatch({ type: 'SET_DATA', payload: contactDetail });
  }, []);

  return <></>;
};

export default ContactDetailBootstrap;
