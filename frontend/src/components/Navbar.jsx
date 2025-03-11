import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getUser } from '../api/authApi.js'


function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const response = await getUser()
      setIsAuthenticated(response && response.user)
      setLoading(false)
    }
    checkAuth()
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

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
          to="auth/login"
          end
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `nav-link active` : "nav-link"
          }
          to="auth/sign-up"
          end
        >
          Sign Up
        </NavLink>
        {
          isAuthenticated &&
          <NavLink className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
            to="auth/logout"
            end
          >Log Out</NavLink>
        }
      </div>
    </nav>
  )
}

export default Navbar