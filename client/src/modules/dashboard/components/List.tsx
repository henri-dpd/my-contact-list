import React from 'react';
import { useDashboardContext } from '../context/useDashboardContext';
import Button from '@/core/components/button/Button';
import ClickableCard from '@/core/components/cards/ClickableCard';
import Plus from '@/assets/plus.png';
import { useNavigate } from 'react-router-dom';

interface Props {
  onAdd: VoidFunction;
  onLoadMore: VoidFunction;
}

const List: React.FC<Props> = ({ onAdd, onLoadMore }) => {
  const { state } = useDashboardContext();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-start items-start">
      <Button startIcon={Plus} onClick={onAdd} className="py-1 px-4">
        Add User
      </Button>
      <br />
      <div className="flex flex-row flex-wrap justify-start items-start">
        {state.items?.map((item) => (
          <ClickableCard
            text={item.name}
            key={item.id}
            onClick={() => {
              navigate(`/${item.id}`);
            }}
          />
        ))}
      </div>
      <Button onClick={onLoadMore} className="mt-10 px-20 mx-auto">
        Load More
      </Button>
    </div>
  );
};

export default List;
