import { createContext } from 'react'

export interface AuthUser {
  id: string
  email: string
}

export interface AuthContextValue {
  user: AuthUser | null
  loading: boolean
  setAuth: (token: string, user: AuthUser) => void
  clearAuth: () => void
}

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: true,
  setAuth: () => {},
  clearAuth: () => {},
})
