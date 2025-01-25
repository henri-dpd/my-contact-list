import React from 'react';

interface Props {
  name: string;
  label: string;
  error?: string;
  props: object;
}

const TextArea: React.FC<Props> = ({ name, label, error, props }) => {
  return (
    <div className="flex justify-center flex flex-col">
      <label htmlFor={name}>{label}</label>
      <textarea
        className="rounded-[10px] w-full h-[32px] min-h-[100px]"
        {...props}
      />
      {error && <p className="text-xs italic text-red-500">{error}</p>}
    </div>
  );
};

export default TextArea;
