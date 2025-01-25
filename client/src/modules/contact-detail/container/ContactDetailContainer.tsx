import { useNavigate, useParams } from 'react-router-dom';
import ContactDetailBootstrap from './ContactDetailBootstrap';
import { ContactDetailProvider } from '../context/provider';
import ContactDetailCard from '../components/ContactDetailCard';
import useLoading from '@/core/components/Loading/useLoading';
import contactService from '@/modules/dashboard/service/contacts.service';
import { ResponseError } from '@/core/types/service';
import useHandleErrors from '@/core/hooks/useHandleErrors';

const ContactDetailContainer: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const handleError = useHandleErrors();

  const handleOnEdit = () => {};
  const handleOnDelete = async () => {
    if (!id) {
      handleError({ message: "Id doesn't exists" });
      return;
    }
    try {
      setLoading(true);
      contactService.deleteContact(id);
      setLoading(false);
    } catch (error) {
      handleError(error as ResponseError);
    } finally {
      setLoading(false);
    }
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
