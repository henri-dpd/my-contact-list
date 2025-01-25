import { Img } from 'react-image';
import ErrorImg from '../assets/error.png';

interface Props {
  message?: string;
}

const ErrorPage: React.FC<Props> = ({ message }) => {
  return (
    <div className="flex flex-col justify-start items-center">
      <h1 className="text-3xl font-bold mb-2">Something went wrong...</h1>
      {message && <p className="font-bold mb-8">{message}</p>}
      <Img src={ErrorImg} className="w-24 h-24" />
    </div>
  );
};

export default ErrorPage;
