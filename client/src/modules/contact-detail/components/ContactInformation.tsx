import Button from '@/core/components/button/Button';
import AvatarImage from '@/core/components/Images/AvatarImage';
import { formatPhone } from '@/core/utils/phone';
import React from 'react';

interface ContactInformationProps {
  name: string;
  image?: string;
  phone: string;
  onDelete?: VoidFunction;
}

const ContactInformation: React.FC<ContactInformationProps> = ({
  name,
  image,
  phone,
  onDelete,
}) => {
  return (
    <div className="flex sm:flex-row flex-col justify-start gap-4 sm:gap-8">
      <AvatarImage alt={`${name} photo`} size="200" src={image} />
      <div className="flex flex-col justify-between w-full gap-4">
        <div className="flex flex-col justify-start text-left">
          <h1 className="inline-flex text-3xl text-darkgrey font-bold mb-1 pr-8">
            {name}
          </h1>
          <span className="text-darkgrey font-bold">{formatPhone(phone)}</span>
        </div>
        <div className="flex flex-row justify-end gap-8">
          <Button>Edit</Button>
          <Button onClick={onDelete}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
