import React from 'react';
import { useDashboardContext } from '../context/useDashboardContext';

interface Props {
  onAdd: VoidFunction;
  onLoadMore: VoidFunction;
}

const List: React.FC<Props> = ({ onAdd, onLoadMore }) => {
  const { state } = useDashboardContext();

  return (
    <div className="flex flex-col justify-start items-start">
      <button onClick={onAdd}>Add User</button>
      <div className="flex flex-row flex-wrap justify-start items-start">
        {state.items?.map((item) => (
          <div className="border border-gray-300 p-2 m-1" key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
      <button onClick={onLoadMore} style={{ marginTop: '10px' }}>
        Load More
      </button>
    </div>
  );
};

export default List;
