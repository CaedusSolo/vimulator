import React, { useEffect } from 'react'
import { logout } from '../api/authApi.js'
import { useNavigate } from 'react-router-dom'

function LogoutPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const handleLogout = async () => {
      const response = await logout()
      if (response && response.message == "Sign out successful") {
        location.reload()
        navigate("/auth/login")
      }
    }
    handleLogout()
  }, [navigate])


  return (
    <div className="content-container">
      <h2 className="text-center">Logging Out...</h2>
    </div>
  )
}

export default LogoutPage