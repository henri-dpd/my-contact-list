import React from 'react';

interface Props {
  name: string;
  label: string;
  error?: string;
  props: object;
  required?: boolean;
}

const TextArea: React.FC<Props> = ({ name, label, error, required, props }) => {
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
      <textarea
        className="rounded-[10px] w-full h-[32px] min-h-[100px] text-dark dark:text-light"
        {...props}
      />
      {error && <p className="text-xs italic text-red-500">{error}</p>}
    </div>
  );
};

export default TextArea;
