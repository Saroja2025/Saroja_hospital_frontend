import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';

const PrivateLayout = () => (
  <div className='app'>
    <Header />
    <Sidebar />
    <main><Outlet /></main>
  </div>
);

export default PrivateLayout;
