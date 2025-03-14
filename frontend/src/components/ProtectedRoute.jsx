import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../api/authApi.js'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

  useEffect(() => {
    if (!loading && !authenticated) {
      toast.info('Please login to continue', {
        position: 'top-center',
        pauseOnHover: true
      })      
      navigate("/auth/login")
    }
  }, [loading, authenticated, navigate])

  if (loading) {
    return <div>Loading...</div>
  }
  else {
    if (authenticated) {
      return <>{children}</>
    }
    else {
      return null
    }
  }
}

export default ProtectedRoute