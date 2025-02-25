import React, { useMemo } from 'react';
import { useDashboardContext } from '../context/useDashboardContext';
import Button from '@/core/components/button/Button';
import ClickableCard from '@/core/components/cards/ClickableCard';
import Plus from '@/assets/plus.png';
import { useNavigate } from 'react-router-dom';
import { Img } from 'react-image';
import EmptyContacts from '@/assets/contacts.png';

interface Props {
  onAdd: VoidFunction;
  onLoadMore: VoidFunction;
}

const List: React.FC<Props> = ({ onAdd, onLoadMore }) => {
  const {
    state: { items, prevItems, total, page },
  } = useDashboardContext();
  const navigate = useNavigate();
  const list = useMemo(
    () => [...(prevItems ?? []), ...(items ?? [])],
    [items, prevItems],
  );

  return (
    <div className="flex flex-col justify-start items-start">
      <Button startIcon={Plus} onClick={onAdd} className="py-1 px-4">
        Add User
      </Button>
      <br />
      <div className="flex flex-row flex-wrap justify-start items-start w-full ">
        {list.length === 0 && (
          <div className="w-full flex justify-center items-center">
            <Img src={EmptyContacts} alt="Contact List Empty" />
          </div>
        )}
        {list.map((item) => (
          <ClickableCard
            text={item.name}
            image={item.image}
            key={item.id}
            onClick={() => {
              navigate(`/${item.id}`);
            }}
          />
        ))}
      </div>
      <Button
        onClick={onLoadMore}
        disabled={!total || total <= page * 10}
        className="mt-10 px-20 mx-auto"
      >
        Load More
      </Button>
    </div>
  );
};

export default List;
