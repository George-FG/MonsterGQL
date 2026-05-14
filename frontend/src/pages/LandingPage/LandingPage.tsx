import './LandingPage.css'

import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button/Button'
import { useAuth } from '../../context/useAuth'

function LandingPage() {
  const navigate = useNavigate()
  const { user, clearAuth } = useAuth()

  return (
    <main className="landing-page">
      <h1 className="landing-title">Welcome to Energy Drink Ranker</h1>
      {user ? (
        <div className="landing-actions">
          <p className="landing-user">Logged in as {user.email}</p>
          <Button variant="primary" onClick={() => navigate('/rank')}>
            Rank Energy Drink
          </Button>
          <Button onClick={clearAuth}>Logout</Button>
        </div>
      ) : (
        <div className="landing-actions">
          <Button onClick={() => navigate('/login')}>Login</Button>
          <Button onClick={() => navigate('/signup')}>Sign up</Button>
          <Button variant="primary" onClick={() => navigate('/rank')}>
            Rank Energy Drink
          </Button>
        </div>
      )}
    </main>
  )
}

export default LandingPage
