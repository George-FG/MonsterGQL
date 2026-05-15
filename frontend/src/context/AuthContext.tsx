import { useMutation, useQuery } from '@apollo/client/react'
import { useState } from 'react'

import { LOGOUT_MUTATION, ME_QUERY } from '../graphql/operations'
import apolloClient from '../lib/apollo'
import type { AuthUser } from './auth'
import { AuthContext } from './auth'

interface MeQueryResult {
  me?: AuthUser
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [localUser, setLocalUser] = useState<AuthUser | null>(null)
  const [logout] = useMutation(LOGOUT_MUTATION)

  const { data, loading } = useQuery<MeQueryResult>(ME_QUERY, {
    skip: !localStorage.getItem('session_token'),
  })

  const user = localUser ?? data?.me ?? null

  const setAuth = (token: string, authedUser: AuthUser) => {
    localStorage.setItem('session_token', token)
    setLocalUser(authedUser)
  }

  const clearAuth = async () => {
    await logout()
    localStorage.removeItem('session_token')
    setLocalUser(null)
    await apolloClient.clearStore()
  }

  return (
    <AuthContext.Provider value={{ user, loading, setAuth, clearAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
