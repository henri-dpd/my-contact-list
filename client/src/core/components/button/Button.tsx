import { Img } from 'react-image';

interface Props {
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
  children?: React.ReactNode;
  startIcon?: string;
  variant?: Variant;
  type?: 'submit' | 'button' | 'reset';
}
type Variant = 'primary' | 'secondary' | 'dark';
type ButtonTheme = { bg: string; color: string; border: string };

const BUTTON_THEME: Record<Variant, ButtonTheme> = {
  primary: { bg: 'primary', color: 'darkgrey', border: 'primarystrong' },
  secondary: { bg: 'secondary', color: 'darkgrey', border: 'dark' },
  dark: { bg: 'dark', color: 'lightgrey', border: 'grey' },
};

const Button: React.FC<Props> = ({
  onClick,
  startIcon,
  className = '',
  children,
  variant = 'primary',
  type,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row gap-1 justify-center items-center text-${BUTTON_THEME[variant].color} border-${BUTTON_THEME[variant].border} bg-${BUTTON_THEME[variant].bg} rounded-[1rem] px-10 ${className}`}
      type={type}
    >
      {startIcon && <Img src={startIcon} className="max-h-6" />}
      {children}
    </button>
  );
};

export default Button;
