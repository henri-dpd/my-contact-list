import AvatarImage from '../Images/AvatarImage';

interface Props {
  image?: string | string[];
  text: string;
  onClick: (e?: React.MouseEvent) => void;
}

const ClickableCard: React.FC<Props> = ({ image, text, onClick }) => {
  return (
    <button
      className="bg-secondary flex flex-col items-center gap-2 m-4 p-4 rounded-none"
      onClick={onClick}
    >
      <AvatarImage src={image} alt={`${text} photo`}  size="100" />
      <span>{text}</span>
    </button>
  );
};

export default ClickableCard;
