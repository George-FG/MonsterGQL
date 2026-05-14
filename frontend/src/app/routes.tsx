import { createBrowserRouter } from 'react-router-dom'

import LandingPage from '../pages/LandingPage/LandingPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import RankingPage from '../pages/RankingPage/RankingPage'
import SignupPage from '../pages/SignupPage/SignupPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/rank',
    element: <RankingPage />,
  },
])

export default router
