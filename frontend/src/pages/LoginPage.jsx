import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { login } from '../api/authApi'
import 'react-toastify/dist/ReactToastify.css'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    console.log(`email: ${email}`)
    console.log(`password: ${password}`)

    const response = await login(email, password)
    if (response == "Success") {
      toast.success("Sign Up Successful!", {
        position: "top-center"
      })
    }
    else {
      toast.error("Error", {
        position: "top-center"
      })
    }
  }

  return (
    <div className="content-container mx-auto w-75">
      <ToastContainer />
      <h2 className="text-center mt-4 mb-4">Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="password" className="form-label">Password</label>
          <input className="form-control" type="password" name="password" id="password" minLength={8} value={password} onChange={handlePasswordChange} />
        </div>

        <button type="submit" className="btn btn-primary mt-2 mb-2">Login</button>
      </form>
    </div>
  )
}

export default LoginPage