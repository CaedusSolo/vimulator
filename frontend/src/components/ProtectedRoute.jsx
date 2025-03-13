import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { getUser } from '../api/authApi.js'

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const getAuthState = async () => {
      const response = await getUser()
      setAuthenticated(response && response.user)
      setLoading(false)
    }
    getAuthState()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  else {
    if (authenticated) {
      return <>{children}</>
    }
    else {
      return navigate("/auth/login")
    }
  }
}

export default ProtectedRoute