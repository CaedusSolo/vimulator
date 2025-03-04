import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar sticky-top">
      <div className="links-container">

        <NavLink
          className={({ isActive }) =>
            isActive ? `nav-link active` : "nav-link"
          }
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `nav-link active` : "nav-link"
          }
          to="/"
          end
        >
          Home
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar