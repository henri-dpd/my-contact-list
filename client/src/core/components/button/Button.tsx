import { Img } from 'react-image';

interface Props {
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
  children?: React.ReactNode;
  startIcon?: string;
  type?: 'submit' | 'button' | 'reset';
}

const Button: React.FC<Props> = ({
  onClick,
  startIcon,
  className = '',
  children,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row gap-1 justify-center items-center text-darkgrey border-primarystrong bg-primary rounded-[1rem] px-10 ${className}`}
      type={type}
    >
      {startIcon && <Img src={startIcon} className='max-h-6' />}
      {children}
    </button>
  );
};

export default Button;
