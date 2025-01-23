import { Img } from 'react-image';
import ErrorImg from '../assets/error.png';

const Root: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
      <Img src={ErrorImg} className="w-24 h-24" />
    </div>
  );
};

export default Root;
