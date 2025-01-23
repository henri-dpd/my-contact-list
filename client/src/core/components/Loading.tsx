import { Img } from 'react-image';
import LoadingIcon from '../../assets/loading.png';

interface Props {
  loading: boolean;
}

const Loading: React.FC<Props> = ({ loading }) => {
  if (!loading) return <></>;
  return (
    <div className="flex justify-center items-center absolute left-0 top-0 w-screen h-screen z-50 bg-darkGrey bg-opacity-40 z-50">
      <div className="flex justify-center items-center gap-3 bg-white rounded-full w-60 h-20">
        <span className="text-2xl " style={{ color: '#626262' }}>
          Loading
        </span>
        <Img className="animate-spin" style={{height: '32px'}} src={LoadingIcon} />
      </div>
    </div>
  );
};

export default Loading;
