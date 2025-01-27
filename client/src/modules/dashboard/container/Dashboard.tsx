import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useDashboardContext } from '../context/useDashboardContext';
import Header from '../components/Header';
import List from '../components/List';
import Dialog from '@/core/components/dialog/Dialog';
import ContactFormContainer from '@/modules/contact-form/container/ContactFormContainer';
import { newContactSchema } from '../schema/newContactSchema';
import { ContactSchema } from '@/core/types/contact';
import useLoading from '@/core/components/loading/useLoading';
import useHandleErrors from '@/core/hooks/useHandleErrors';
import contactService from '../service/contacts.service';
import { ResponseError } from '@/core/types/service';
import { convertFileToBase64 } from '@/core/utils/base64';
import { CreateContactDTO } from '../types/contactTypes';

const Dashboard: React.FC = () => {
  const {
    state: { page },
    dispatch,
  } = useDashboardContext();
  const [openNewContactForm, setOpenNewContactForm] = useState(false);
  const { setLoading } = useLoading();
  const handleError = useHandleErrors();

  const handleSearch = useDebouncedCallback((value: string) => {
    dispatch({ type: 'SET_SEARCH', payload: value });
  }, 1000);

  const handleAdd = () => {
    setOpenNewContactForm(true);
  };
  const handleCloseDialog = () => {
    setOpenNewContactForm(false);
  };

  const handleLoadMore = () => {
    dispatch({ type: 'SET_PAGE', payload: page + 1 });
  };

  const handleCreateNewContact = async (data: ContactSchema) => {
    const newContact: CreateContactDTO = {
      ...data,
      image: await convertFileToBase64(data.image),
    };
    try {
      setLoading(true);
      await contactService.createContact(newContact);
      dispatch({ type: 'CLEAN' });
      setLoading(false);
      handleCloseDialog();
    } catch (error) {
      handleError(error as ResponseError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <br />
      <List onAdd={handleAdd} onLoadMore={handleLoadMore} />
      <Dialog
        title="Create a New Contact"
        open={openNewContactForm}
        onClose={handleCloseDialog}
      >
        <ContactFormContainer
          contactSchema={newContactSchema}
          onSubmit={handleCreateNewContact}
        />
      </Dialog>
    </>
  );
};

export default Dashboard;
