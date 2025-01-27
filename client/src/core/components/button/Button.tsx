import { ColorTheme, Variant } from '@/core/types/theme';
import { Img } from 'react-image';

const BUTTON_THEME: Record<Variant, ColorTheme> = {
  primary: {
    bg: 'bg-primary',
    color: 'text-darkgrey',
    border: 'border-primarystrong',
  },
  secondary: {
    bg: 'bg-secondary',
    color: 'text-light',
    border: 'border-light',
  },
  dark: { bg: 'bg-dark', color: 'text-light', border: 'border-grey' },
  error: { bg: 'bg-dark', color: 'text-error', border: 'border-error' },
  success: { bg: 'bg-light', color: 'text-success', border: 'border-success' },
  light: {
    bg: 'bg-light',
    color: 'text-darkgrey',
    border: 'border-lightgrey',
  },
};

interface Props {
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
  children?: React.ReactNode;
  startIcon?: string;
  variant?: Variant;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  onClick,
  startIcon,
  className = '',
  children,
  variant = 'primary',
  disabled = false,
  type,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex flex-row gap-1 justify-center items-center rounded-[1rem] px-10 ${className}
                  ${BUTTON_THEME[variant].color} ${BUTTON_THEME[variant].border} ${BUTTON_THEME[variant].bg}
                  ${disabled ? 'bg-gray-400 text-gray-200 cursor-not-allowed opacity-60' : ''}`}
      type={type}
    >
      {startIcon && <Img src={startIcon} className="max-h-6" />}
      {children}
    </button>
  );
};

export default Button;
