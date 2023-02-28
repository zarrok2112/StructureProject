import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import {Login} from './pages/login';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider 
    domain='zarrok.us.auth0.com' 
    clientId='l29dY23iqJcC5TrwqXOr5vzCTv6bJVwy'
    onRedirectCallback={window.location.origin}>
    <App />
    </Auth0Provider>
  </React.StrictMode>,
)
