import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
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

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format.", {
        position: "top-right"
      })
      return false
    }
    return emailRegex.test(email)
  }

  const isValidPassword = (password) => {
    if (password.length < 8) {
        toast.error('Password must be at least 8 characters long.', { position: 'top-center' });
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        toast.error('Password must contain at least one uppercase letter.', { position: 'top-center' });
        return false;
    }

    if (!/[a-z]/.test(password)) {
        toast.error('Password must contain at least one lowercase letter.', { position: 'top-center' });
        return false;
    }

    if (!/[0-9]/.test(password)) {
        toast.error('Password must contain at least one digit.', { position: 'top-center' });
        return false;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        toast.error('Password must contain at least one special character.', { position: 'top-center' });
        return false;
    }

    return true;
};

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const emailValid = isValidEmail(email);
    const passwordValid = isValidPassword(password);

    if (!emailValid || !passwordValid) return;

    if (password !== confirmPassword) {
        toast.error('Passwords do not match.', { position: 'top-center' });
        return;
    }
  }

  return (
    <div className="content-container mx-auto w-75">
      <ToastContainer />
      <h2 className="text-center mt-4 mb-4">Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="password" className="form-label">Password</label>
          <input className="form-control" type="password" name="password" value={password} id="password" minLength={8} onChange={handlePasswordChange} />
        </div>

        <div className="form-group mb-2">
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