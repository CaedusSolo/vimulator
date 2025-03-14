import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { isValidEmail, isValidPassword } from '../utils/validationUtils'
import { signUp } from '../api/authApi'
import 'react-toastify/dist/ReactToastify.css'


function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")


  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const emailValid = isValidEmail(email, toast);
    const passwordValid = isValidPassword(password, toast);

    if (!emailValid || !passwordValid) return;

    if (password !== confirmPassword) {
        toast.error('Passwords do not match.', { position: 'top-center' });
        return;
    }

    const response = await signUp(email, password)
    if (response && response.message == "User created successfully") {
      toast.success(`Signed Up Successfully! Please check ${email} to confirm your account.`, {
        position: "top-center"
      })
    } else if (response && response.error) {
      toast.error(response.error, {
        position: "top-center"
      })
    }
    else {
      toast.error("An unknown error occurred. Please try again.", {
        position: "top-center"
      })
    }
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }

  return (
    <div className="content-container mx-auto w-75">
      <ToastContainer />
      <h2 className="text-center mt-4 mb-4">Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input className="form-control" type="password" name="password" value={password} id="password" minLength={8} onChange={handlePasswordChange} />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
          <input className="form-control" type="password" name="confirm-password" value={confirmPassword} id="confirm-password" minLength={8} onChange={handleConfirmPasswordChange} />
        </div>

        <button className="btn btn-primary mt-2 mb-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default SignUpPage