import { useParams } from 'react-router-dom';
import ContactDetailBootstrap from './ContactDetailBootstrap';
import { ContactDetailProvider } from '../context/provider';
import ContactDetail from './ContactDetail';

const ContactDetailContainer: React.FC = () => {
  const { id } = useParams();
  return (
    <ContactDetailProvider>
      <ContactDetail id={id} />
      <ContactDetailBootstrap id={id} />
    </ContactDetailProvider>
  );
};

export default ContactDetailContainer;
