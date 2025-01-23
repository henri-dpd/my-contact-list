import React from 'react';
import { useContactDetailContext } from '../context/useContactDetailContext';

interface Props {
  onEdit?: VoidFunction;
  onDelete?: VoidFunction;
}

const ContactDetailCard: React.FC<Props> = () => {
  const { state } = useContactDetailContext();
  return (
    <div className="contact-detail-card">
      <h1 className="text-3xl font-bold mb-4">{state.contact?.name}</h1>
      <p>Phone: {state.contact?.phoneNumber}</p>
      <p>Bio: {state.contact?.biography}</p>
    </div>
  );
};

export default ContactDetailCard;
