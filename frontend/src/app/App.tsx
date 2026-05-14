import './App.css'

import { ApolloProvider } from '@apollo/client/react'
import { RouterProvider } from 'react-router-dom'

import { AuthProvider } from '../context/AuthContext'
import apolloClient from '../lib/apollo'
import router from './routes'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ApolloProvider>
  )
}

export default App
