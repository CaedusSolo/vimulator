import supabase from "../config/supabase.js"

const login = async (req, res) => {
  const { email, password } = req.body

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })

  if (data) {
    return res.status(200).json({ message: "Login successful" });
  }

  if (error) {
    return res.status(400).json({ error: "Error logging in" });
  }
}

const signUp = async (req, res) => {
  const { email, password } = req.body

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  })

  if (data) {
    return res.status(201).json({ message: "User created successfully" });
  }

  if (error) {
    return res.status(400).json({ error: "Email and password are required" });
  }
}

export { login, signUp }