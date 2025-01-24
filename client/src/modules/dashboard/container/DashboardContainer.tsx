import Header from '../components/Header';
import List from '../components/List';
import { DashboardProvider } from '../context/provider';
import DashboardBootstrap from './DashboardBootstrap';

const DashboardContainer: React.FC = () => {
  const handleAdd = () => {};

  const handleLoadMore = () => {};

  const handleSearch = (search: string) => {
    console.log(search);
  };

  return (
    <DashboardProvider>
      <div className="w-full h-full">
        <Header onSearch={handleSearch} />
        <br />
        <List onAdd={handleAdd} onLoadMore={handleLoadMore} />
        <DashboardBootstrap />
      </div>
    </DashboardProvider>
  );
};

export default DashboardContainer;
