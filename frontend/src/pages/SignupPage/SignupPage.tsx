import './SignupPage.css'

import { useMutation } from '@apollo/client/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button/Button'
import { useAuth } from '../../context/useAuth'
import { SIGNUP_MUTATION } from '../../graphql/operations'

function SignupPage() {
  const navigate = useNavigate()
  const { setAuth } = useAuth()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const [signup, { loading }] = useMutation<{
    signup: { token: string; user: { id: string; email: string; username: string } }
  }>(SIGNUP_MUTATION, {
    onCompleted: (data) => {
      setAuth(data.signup.token, data.signup.user)
      navigate('/')
    },
    onError: (err: Error) => setError(err.message),
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    signup({ variables: { email, username, password } })
  }

  return (
    <main className="auth-page">
      <h1 className="auth-title">Sign up</h1>
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
          Username
          <input
            className="auth-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength={3}
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
            minLength={8}
          />
        </label>
        {error && <p className="auth-error">{error}</p>}
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Creating account…' : 'Sign up'}
        </Button>
      </form>
      <p className="auth-switch">
        Already have an account?{' '}
        <button className="auth-link" onClick={() => navigate('/login')}>
          Login
        </button>
      </p>
    </main>
  )
}

export default SignupPage
