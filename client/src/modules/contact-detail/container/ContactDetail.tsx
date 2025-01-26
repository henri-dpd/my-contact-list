import { useNavigate } from 'react-router-dom';
import ContactDetailCard from '../components/ContactDetailCard';
import useLoading from '@/core/components/Loading/useLoading';
import contactService from '@/modules/dashboard/service/contacts.service';
import { ResponseError } from '@/core/types/service';
import useHandleErrors from '@/core/hooks/useHandleErrors';
import Dialog from '@/core/components/dialog/Dialog';
import ContactFormContainer from '@/modules/contact-form/container/ContactFormContainer';
import { editContactSchema } from '../schema/editContactSchema';
import { useMemo, useState } from 'react';
import { ContactSchema, defaultContactSchema } from '@/core/types/contact';
import useFetchContactDetail from '../hooks/useFetchContactDetail';
import { useContactDetailContext } from '../context/useContactDetailContext';
import Loading from '@/core/components/Loading/Loading';
import Button from '@/core/components/button/Button';
import { convertBase64ToFile, convertFileToBase64 } from '@/core/utils/base64';

interface Props {
  id?: string;
}

const ContactDetail: React.FC<Props> = ({ id }) => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const handleError = useHandleErrors();
  const [openEditContactForm, setOpenEditContactForm] = useState(false);
  const [openDeleteContactDialog, setOpenDeleteContactDialog] = useState(false);
  const fetchContactDetail = useFetchContactDetail(id);
  const {
    state: { contact },
  } = useContactDetailContext();

  const currentContact = useMemo<ContactSchema>(
    () =>
      contact
        ? {
            ...contact,
            image: convertBase64ToFile(contact?.image, `${contact.name} Photo`),
          }
        : defaultContactSchema,
    [contact],
  );

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
      const contact = { ...data, image: await convertFileToBase64(data.image) };
      await contactService.editContact(id, contact);
      await fetchContactDetail();
      setLoading(false);
      handleCloseDialog();
    } catch (error) {
      handleError(error as ResponseError);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDeleteDialog = async () => {
    setOpenDeleteContactDialog(true);
  };
  const handleCloseDeleteDialog = async () => {
    setOpenDeleteContactDialog(false);
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
      handleCloseDeleteDialog();
    }
    navigate(-1);
  };

  if (!contact) return <Loading loading />;

  return (
    <>
      <ContactDetailCard
        onEdit={handleEdit}
        onDelete={handleOpenDeleteDialog}
      />
      <Dialog
        title="Edit Contact"
        open={openEditContactForm}
        onClose={handleCloseDialog}
      >
        <ContactFormContainer
          onSubmit={handleOnEditContact}
          contactSchema={editContactSchema}
          initalData={currentContact}
        />
      </Dialog>
      <Dialog
        title="Delete Contact"
        open={openDeleteContactDialog}
        onClose={handleCloseDeleteDialog}
        variant="dark"
        actions={
          <>
            <Button variant="error" onClick={handleOnDelete}>
              Delete
            </Button>
            <Button variant="light" onClick={handleCloseDeleteDialog}>
              Cancel
            </Button>
          </>
        }
      >
        Are you sure you want to delete this contact?
      </Dialog>
    </>
  );
};

export default ContactDetail;
