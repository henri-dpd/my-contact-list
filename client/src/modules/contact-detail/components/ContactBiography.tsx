import React from 'react';

interface ContactBiographyProps {
  biography: string;
}

const ContactBiography: React.FC<ContactBiographyProps> = ({ biography }) => {
  return (
    <div className="flex flex-col text-left">
      <h2 className="text-2xl text-darkgrey font-bold mb-1 pr-8">Biography</h2>
      <p className="text-darkgrey text-[1.15rem]">
        {biography ? (
          biography
        ) : (
          <span className="text-grey">No biography provided</span>
        )}
      </p>
    </div>
  );
};

export default ContactBiography;
