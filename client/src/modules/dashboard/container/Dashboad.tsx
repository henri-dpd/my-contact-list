import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useDashboardContext } from '../context/useDashboardContext';
import Header from '../components/Header';
import List from '../components/List';
import Dialog from '@/core/components/dialog/Dialog';
import UserRegistrationForm from '@/modules/contact-form/container/ContactFormContainer';
import { newContactSchema } from '../schema/newContactSchema';
import { ContactSchema } from '@/core/types/contact';

const Dashboard: React.FC = () => {
  const {
    state: { page, total },
    dispatch,
  } = useDashboardContext();
  const [openNewContactForm, setOpenNewContactForm] = useState(false);

  const handleSearch = useDebouncedCallback((value: string) => {
    dispatch({ type: 'SET_SEARCH', payload: value });
  }, 1000);

  const handleAdd = () => {
    setOpenNewContactForm(true);
  };

  const handleLoadMore = () => {
    dispatch({ type: 'SET_PAGE', payload: page * 10 < total ? page + 1 : 1 });
  };

  const handleCreateNewContact = (data: ContactSchema) => {
    console.log(data);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <br />
      <List onAdd={handleAdd} onLoadMore={handleLoadMore} />
      <Dialog
        title="Create a New Contact"
        open={openNewContactForm}
        onClose={() => setOpenNewContactForm(false)}
      >
        <UserRegistrationForm
          contactSchema={newContactSchema}
          onSubmit={handleCreateNewContact}
        />
      </Dialog>
    </>
  );
};

export default Dashboard;
