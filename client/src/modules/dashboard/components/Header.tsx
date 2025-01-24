import React from 'react';

interface Props {
  onSearch: (search: string) => void;
}

const Header: React.FC<Props> = ({ onSearch }) => {
  return (
    <header className="flex justify-between">
      <h1 className="inline-flex text-3xl text-darkgrey font-bold mb-4 pr-8">
        Users
      </h1>
      <input
        className="ml-auto w-full bg-transparent placeholder-dark text-white outline-none w-80 h-10 rounded-full bg-lightgrey flex items-center px-4"
        type="search"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  );
};

export default Header;
