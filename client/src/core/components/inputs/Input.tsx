import React from 'react';

interface Props {
  name: string;
  label: string;
  error?: string;
  props: object;
  type?: 'text' | 'tel';
}

const Input: React.FC<Props> = ({
  name,
  label,
  error,
  props,
  type = 'text',
}) => {
  return (
    <div className="flex justify-center flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        className="rounded-[10px] w-full h-[32px]"
        type={type}
        {...props}
      />
      {error && <p className="text-xs italic text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
