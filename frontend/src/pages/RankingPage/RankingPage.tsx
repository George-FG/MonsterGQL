import './RankingPage.css'

import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button/Button'

function RankingPage() {
  const navigate = useNavigate()

  return (
    <main className="ranking-page">
      <h1 className="ranking-title">Rank Energy Drinks</h1>
      <p className="ranking-placeholder">Ranking functionality will be added here soon.</p>
      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </main>
  )
}

export default RankingPage
