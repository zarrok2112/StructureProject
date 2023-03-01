import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {Carditem} from '../components/index/CardItem'

export const Login = () => {
  const {loginWithRedirect} = useAuth0();

  return (
    <div>
        <Carditem name={"Juanito perez"} descripcion={"hola soy la descripcion"}/>
    </div>
  )
}

