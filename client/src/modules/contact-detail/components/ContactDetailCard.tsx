import React from 'react';
import { useContactDetailContext } from '../context/useContactDetailContext';
import ContactBiography from './ContactBiography';
import ContactInformation from './ContactInformation';
import Loading from '@/core/components/Loading/Loading';

interface Props {
  onEdit?: VoidFunction;
  onDelete?: VoidFunction;
}

const ContactDetailCard: React.FC<Props> = () => {
  const {
    state: { contact },
  } = useContactDetailContext();
  if (!contact) return <Loading loading />;
  return (
    <div className="flex flex-col justify-start gap-4 sm:gap-8">
      <ContactInformation
        name={contact!.name}
        image={contact!.image}
        phone={contact!.phoneNumber}
      />
      <hr className="border-primarystrong" />
      <ContactBiography biography={contact!.biography} />
    </div>
  );
};

export default ContactDetailCard;
