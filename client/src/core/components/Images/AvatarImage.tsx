import React from 'react';
import { Img } from 'react-image';
import Avatar from '@/assets/avatar.png';

interface AvatarImageProps {
  src?: string | string[];
  alt?: string;
  size?: number;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt, size }) => {
  return (
    <Img
      className={`border border-white border-4 rounded-[5px] bg-backgroundstrong ${size}`}
      alt={alt}
      defaultValue={Avatar}
      src={src ?? Avatar}
    />
  );
};

export default AvatarImage;
