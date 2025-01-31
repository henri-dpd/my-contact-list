import { ContactSchema } from '@/core/types/contact';
import React from 'react';
import { Control } from 'react-hook-form';
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';
import 'react-phone-number-input/style.css';

interface Props {
  name: string;
  label: string;
  error?: string;
  control: Control<ContactSchema>;
  required?: boolean;
}

const PhoneInput: React.FC<Props> = ({
  name,
  label,
  error,
  control,
  required,
}) => {
  return (
    <div className="flex justify-center flex flex-col">
      <label htmlFor={name}>
        {label}{' '}
        <span
          className={`text-light align-middle ${required ? 'visible' : 'invisible'}`}
        >
          *
        </span>
      </label>

      <PhoneInputWithCountry
        defaultCountry="US"
        name={name}
        control={control}
      />
      {error && <p className="text-xs italic text-red-500">{error}</p>}
    </div>
  );
};

export default PhoneInput;
