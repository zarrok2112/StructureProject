import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import './estilos/navbar.css'

export const Navigator = () => {
    return (
      <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/">Login</NavLink>
          <NavLink to="features">Features</NavLink>
          <NavLink to="pricing">Pricing</NavLink>
          <NavLink to="disabled">Disabled</NavLink>
        </div>
      </nav>
      </header>
      <main><Outlet />
      </main>
      </div>
    )

}