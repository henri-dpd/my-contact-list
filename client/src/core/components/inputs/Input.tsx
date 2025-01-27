import React from 'react';

interface Props {
  name: string;
  label: string;
  error?: string;
  props: object;
  required?: boolean;
  type?: 'text' | 'tel' | 'image';
}

const Input: React.FC<Props> = ({
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
          className={`text-light  align-middle ${required ? 'visible' : 'invisible'}`}
        >
          *
        </span>
      </label>
      <input
        className="rounded-[10px] w-full h-[32px] text-dark dark:text-light"
        type={type}
        required={required}
        {...props}
      />
      {error && <p className="text-xs italic text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
