import { useRoutes, Navigate } from 'react-router-dom';
import HomeView from './resources/views/HomeView';

const Routes = () => {
  return useRoutes([
    { path: '/', element: <HomeView /> },
    { path: '*', element: <Navigate to='/' /> }
  ]);
};

export default Routes;
