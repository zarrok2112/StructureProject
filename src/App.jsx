import { useState } from 'react';
import './App.css';
import {Navigator} from './components/shared/navbar';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider,} from "react-router-dom";
import {Login} from './pages/login';
import { Disabled } from './pages/disabled';
import { Features } from './pages/features';
import { Pricing } from './pages/pricing';
import {Index} from './pages/index/inicio';
import {Perfil} from './pages/index/perfil';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Navigator />}>

      <Route index element= {<Login/>} />
      <Route path='Features' element={<Features />} />
      <Route path='Pricing' element={<Pricing />} />
      <Route path='Disabled' element={<Disabled />} />

    </Route>

  )
  
    
  
);


function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />
  )
}

export default App
