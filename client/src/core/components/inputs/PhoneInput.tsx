import React from 'react';
import { InputMask } from '@react-input/mask';

interface Props {
  name: string;
  label: string;
  error?: string;
  props: object;
  required?: boolean;
  type?: 'text' | 'tel' | 'image';
}

const PhoneInput: React.FC<Props> = ({
  name,
  label,
  error,
  props,
  required,
  type = 'text',
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

      <InputMask
        className="rounded-[10px] w-full h-[32px]"
        type={type}
        required={required}
        {...props}
        mask="+1 (___) ___-____"
        replacement={{ _: /\d/ }}
      />
      {error && <p className="text-xs italic text-red-500">{error}</p>}
    </div>
  );
};

export default PhoneInput;
