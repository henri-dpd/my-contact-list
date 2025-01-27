import React from 'react';
import { Img } from 'react-image';
import Avatar from '@/assets/avatar.png';

interface AvatarImageProps {
  src?: string | string[];
  alt?: string;
  size?: string;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt, size }) => {
  const dimension = size ? `${size}px` : 'auto';

  return (
    <Img
      className="border border-white border-4 rounded-[5px] bg-backgroundstrong"
      style={{ height: dimension, width: dimension }}
      alt={alt}
      defaultValue={Avatar}
      src={src ?? Avatar}
    />
  );
};

export default AvatarImage;
