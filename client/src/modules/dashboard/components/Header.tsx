import React from 'react';

interface Props {
  onSearch: (search: string) => void;
}

const Header: React.FC<Props> = ({ onSearch }) => {
  return (
    <header className="flex justify-between mx-4">
      <h1 className="inline-flex text-3xl font-bold mb-4">My Contact List</h1>
      <input
        className="ml-auto bg-transparent placeholder-lightgrey text-white outline-none w-80 h-10 rounded-full bg-darkgrey flex items-center px-4"
        type="search"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  );
};

export default Header;
