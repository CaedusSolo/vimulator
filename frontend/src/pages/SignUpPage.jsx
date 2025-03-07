import React from 'react'

function SignUpPage() {

  const handleFormSubmit = (e) => {
    e.preventDefault() 
    console.log("Form submitted!")
  }

  return (
    <div className="content-container mx-auto w-75">
      <h2 className="text-center mb-4">Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="password" className="form-label">Password</label>
          <input className="form-control"  type="password" name="password" id="password" minLength={8} />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
          <input className="form-control" type="password" name="confirm-password" id="confirm-password" minLength={8} />
        </div>
      </form>
    </div>
  )
}

export default SignUpPage