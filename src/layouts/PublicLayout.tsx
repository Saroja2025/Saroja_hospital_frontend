import { Outlet } from 'react-router-dom';
import HeaderPublic from '../components/common/HeaderPublic';

const PublicLayout = () => (
  <div className='app'>
    <HeaderPublic />
    <main><Outlet /></main>
  </div>
);

export default PublicLayout;
