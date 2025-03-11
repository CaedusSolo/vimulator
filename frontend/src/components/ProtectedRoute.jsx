import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { getUser } from '../api/authApi.js'

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const getAuthState = async () => {
      const response = await getUser()
      setAuthenticated(!!response)
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
      return <Navigate to="login"></Navigate>
    }
  }
}

export default ProtectedRoute