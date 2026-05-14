import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="landing-page">
      <h1 className="landing-title">Welcome to Energy Drink Ranker</h1>
      <div className="landing-actions">
        <Button>Login</Button>
        <Button>Sign up</Button>
        <Button variant="primary" onClick={() => navigate('/rank')}>
          Rank Energy Drink
        </Button>
      </div>
    </main>
  );
}

export default LandingPage;
