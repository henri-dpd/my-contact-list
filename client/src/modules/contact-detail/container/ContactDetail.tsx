import { useNavigate } from 'react-router-dom';
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
import useFetchContactDetail from '../hooks/useFetchContactDetail';
import { useContactDetailContext } from '../context/useContactDetailContext';
import Loading from '@/core/components/Loading/Loading';

interface Props {
  id?: string;
}

const ContactDetail: React.FC<Props> = ({ id }) => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const handleError = useHandleErrors();
  const [openEditContactForm, setOpenEditContactForm] = useState(false);
  const fetchContactDetail = useFetchContactDetail(id);
  const {
    state: { contact },
  } = useContactDetailContext();

  const handleEdit = () => {
    setOpenEditContactForm(true);
  };
  const handleCloseDialog = () => {
    setOpenEditContactForm(false);
  };

  const handleOnEditContact = async (data: ContactSchema) => {
    if (!id) {
      handleError({ message: "Id doesn't exists" });
      return;
    }
    try {
      setLoading(true);
      await contactService.editContact(id, data);
      await fetchContactDetail();
      setLoading(false);
      handleCloseDialog();
    } catch (error) {
      handleError(error as ResponseError);
    } finally {
      setLoading(false);
    }
  };

  const handleOnDelete = async () => {
    if (!id) {
      handleError({ message: "Id doesn't exists" });
      return;
    }
    try {
      setLoading(true);
      await contactService.deleteContact(id);
      setLoading(false);
    } catch (error) {
      handleError(error as ResponseError);
    } finally {
      setLoading(false);
    }
    navigate(-1);
  };

  if (!contact) return <Loading loading />;

  return (
    <>
      <ContactDetailCard onEdit={handleEdit} onDelete={handleOnDelete} />
      <Dialog
        title="Edit Contact"
        open={openEditContactForm}
        onClose={handleCloseDialog}
      >
        <UserRegistrationForm
          onSubmit={handleOnEditContact}
          contactSchema={editContactSchema}
          initalData={contact}
        />
      </Dialog>
    </>
  );
};

export default ContactDetail;
