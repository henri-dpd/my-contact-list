import React from 'react';
import { useContactDetailContext } from '../context/useContactDetailContext';
import ContactBiography from './ContactBiography';
import ContactInformation from './ContactInformation';

interface Props {
  onEdit?: VoidFunction;
  onDelete?: VoidFunction;
}

const ContactDetailCard: React.FC<Props> = ({ onEdit, onDelete }) => {
  const {
    state: { contact },
  } = useContactDetailContext();

  return (
    <div className="flex flex-col justify-start gap-4 sm:gap-8">
      <ContactInformation
        name={contact!.name}
        image={contact!.image}
        phone={contact!.phone}
        onDelete={onDelete}
        onEdit={onEdit}
      />
      <hr className="border-primarystrong" />
      <ContactBiography biography={contact!.biography} />
    </div>
  );
};

export default ContactDetailCard;
