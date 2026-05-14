import './LoginPage.css'

import { useMutation } from '@apollo/client/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button/Button'
import { useAuth } from '../../context/useAuth'
import { LOGIN_MUTATION } from '../../graphql/operations'

function LoginPage() {
  const navigate = useNavigate()
  const { setAuth } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const [login, { loading }] = useMutation<{
    login: { token: string; user: { id: string; email: string } }
  }>(LOGIN_MUTATION, {
    onCompleted: (data) => {
      setAuth(data.login.token, data.login.user)
      navigate('/')
    },
    onError: (err: Error) => setError(err.message),
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    login({ variables: { email, password } })
  }

  return (
    <main className="auth-page">
      <h1 className="auth-title">Login</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="auth-label">
          Email
          <input
            className="auth-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="auth-label">
          Password
          <input
            className="auth-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <p className="auth-error">{error}</p>}
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Logging in…' : 'Login'}
        </Button>
      </form>
      <p className="auth-switch">
        No account?{' '}
        <button className="auth-link" onClick={() => navigate('/signup')}>
          Sign up
        </button>
      </p>
    </main>
  )
}

export default LoginPage
