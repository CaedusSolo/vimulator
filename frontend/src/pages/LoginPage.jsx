import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { login } from '../api/authApi.js'
import { isValidEmail } from '../utils/validationUtils'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    const emailValid = isValidEmail(email, toast);
    if (!emailValid) return;

    if (!password || password.length < 8) {
      toast.error('Please enter a valid password (minimum 8 characters).', { position: 'top-center' });
      return;
    }

    const response = await login(email, password);

    if (response && response.message == "Login successful") {
      toast.success("Login Successful!", {
        position: "top-center"
      });
      navigate("/")
      location.reload()
    } else if (response && response.error) {
      toast.error(response.error, {
        position: "top-center"
      })
    }
    else {
      toast.error("An unknown error occurred. Please try again.", {
        position: "top-center"
      });
    }
    setEmail("")
    setPassword("")
  }

  return (
    <div className="content-container mx-auto w-75">
      <ToastContainer />
      <h2 className="text-center mt-4 mb-4">Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input className="form-control" type="password" name="password" id="password" minLength={8} value={password} onChange={handlePasswordChange} />
        </div>

        <button type="submit" className="btn btn-primary mt-2 mb-2">Login</button>
      </form>
    </div>
  )
}

export default LoginPage