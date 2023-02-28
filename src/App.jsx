import { useState } from 'react';
import './App.css';
import {Navigator} from './components/shared/navbar';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import {Login} from './pages/login';
import {Index} from './pages/index/inicio';
import {Perfil} from './pages/index/perfil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
]);


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div><Navigator/></div>
      <div><RouterProvider router={router} /></div>
      
    </div>
  )
}

export default App
