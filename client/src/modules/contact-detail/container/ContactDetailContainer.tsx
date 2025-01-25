import { useNavigate, useParams } from 'react-router-dom';
import ContactDetailBootstrap from './ContactDetailBootstrap';
import { ContactDetailProvider } from '../context/provider';
import ContactDetailCard from '../components/ContactDetailCard';
import useLoading from '@/core/components/Loading/useLoading';
import contactService from '@/modules/dashboard/service/contacts.service';
import { ResponseError } from '@/core/types/service';
import useHandleErrors from '@/core/hooks/useHandleErrors';
import Dialog from '@/core/components/dialog/Dialog';
import UserRegistrationForm from '@/modules/contact-form/container/ContactFormContainer';
import { editContactSchema } from '../schema/editContactSchema';
import { useState } from 'react';
import { ContactSchema } from '@/core/types/contact';

const ContactDetailContainer: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const handleError = useHandleErrors();
  const [openEditContactForm, setOpenEditContactForm] = useState(false);

  const handleEdit = () => {
    setOpenEditContactForm(true);
  };

  const handleOnEditContact = (data: ContactSchema) => {
    console.log(data);
  };

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
      <ContactDetailCard onEdit={handleEdit} onDelete={handleOnDelete} />
      <ContactDetailBootstrap id={id} />
      <Dialog
        title="Create a New Contact"
        open={openEditContactForm}
        onClose={() => setOpenEditContactForm(false)}
      >
        <UserRegistrationForm
          onSubmit={handleOnEditContact}
          contactSchema={editContactSchema}
        />
      </Dialog>
    </ContactDetailProvider>
  );
};

export default ContactDetailContainer;
