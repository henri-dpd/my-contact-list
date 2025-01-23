import { useNavigate, useParams } from 'react-router-dom';
import ContactDetailBootstrap from './ContactDetailBootstrap';
import { ContactDetailProvider } from '../context/provider';
import ContactDetailCard from '../components/ContactDetailCard';

const ContactDetailContainer: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleOnEdit = () => {};
  const handleOnDelete = () => {
    navigate(-1);
  };

  return (
    <ContactDetailProvider>
      <ContactDetailCard onEdit={handleOnEdit} onDelete={handleOnDelete} />
      <ContactDetailBootstrap id={id} />
    </ContactDetailProvider>
  );
};

export default ContactDetailContainer;
