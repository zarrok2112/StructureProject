import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Login = () => {
  const {loginWithRedirect} = useAuth0();

  return (
    <div>
        <h1>hola</h1>
    </div>
  )
}

