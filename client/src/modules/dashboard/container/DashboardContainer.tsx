import { DashboardProvider } from '../context/provider';
import Dashboard from './DashBoad';
import DashboardBootstrap from './DashboardBootstrap';

const DashboardContainer: React.FC = () => {
  return (
    <DashboardProvider>
      <div className="w-full h-full">
        <Dashboard />
      </div>
      <DashboardBootstrap />
    </DashboardProvider>
  );
};

export default DashboardContainer;
