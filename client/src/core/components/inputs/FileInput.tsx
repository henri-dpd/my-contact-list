import React from 'react';

interface Props {
  name: string;
  label: string;
  error?: string;
  props: object;
  required?: boolean;
}

const FileInput: React.FC<Props> = ({ name, label, error, required, props }) => {
  return (
    <div className="flex justify-center flex flex-col gap-1">
      <label htmlFor={name}>
        {label}{' '}
        <span
          className={`text-light  align-middle ${required ? 'visible' : 'invisible'}`}
        >
          *
        </span>
      </label>
      <input
        type="file"
        accept="image/*"
        {...props}
        style={{ mixBlendMode: 'hard-light' }}
      />
      {error && <p className="text-xs italic text-red-500">{error}</p>}
    </div>
  );
};

export default FileInput;
