import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import RankingPage from '../pages/RankingPage/RankingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/rank',
    element: <RankingPage />,
  },
]);

export default router;
