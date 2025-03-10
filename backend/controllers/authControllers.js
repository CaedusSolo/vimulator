const login = async (req, res) => {
  const {email, password} = req.body

  if (email && password) {
    console.log(`Email: ${email}`)
    console.log(`Password: ${password}`)
    
    return res.status(200).json({ message: "Login successful" });
  } else {
    return res.status(400).json({ error: "Email and password are required" });
  }
}

const signUp = async (req, res) => {
  const {email, password} = req.body

  if (email && password) {
    console.log(`Email: ${email}`)
    console.log(`Password: ${password}`)
    
    return res.status(201).json({ message: "User created successfully" });
  } else {
    return res.status(400).json({ error: "Email and password are required" });
  }
}

export {login, signUp}