import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useDashboardContext } from '../context/useDashboardContext';
import Header from '../components/Header';
import List from '../components/List';

const Dashboard: React.FC = () => {
  const {
    state: { page, total },
    dispatch,
  } = useDashboardContext();
  const handleSearch = useDebouncedCallback((value: string) => {
    dispatch({ type: 'SET_SEARCH', payload: value });
  }, 1000);

  const handleAdd = () => {};

  const handleLoadMore = () => {
    dispatch({ type: 'SET_PAGE', payload: page * 10 < total ? page + 1 : 1 });
  };
  return (
    <>
      <Header onSearch={handleSearch} />
      <br />
      <List onAdd={handleAdd} onLoadMore={handleLoadMore} />
    </>
  );
};

export default Dashboard;
