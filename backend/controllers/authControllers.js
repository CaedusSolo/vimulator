import supabase from "../config/supabase.js"

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." })
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })

    if (error) {
      return res.status(401).json({ error: error.message || "Invalid credentials." }) // 401 Unauthorized error
    }

    return res.status(200).json({ message: "Login successful", data }) //  If login successful, return 200
  }
  catch (error) {
    return res.status(500).json({ error: "Internal server error." }) // 500 Internal Server error
  }
}

const signUp = async (req, res) => {
  const { email, password } = req.body

  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." })
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: "http://localhost:5173/auth/login"
      }
    })

    if (error) {
      if (error.message.includes("already exists")) {
        return res.status(409).json({ error: "Account already exists." })
      }
      return res.status(400).json({ error: error.message || "Sign up failed." })
    }

    return res.status(201).json({ message: "User created successfully", data }) // Success message
  }

  catch (error) {
    return res.status(500).json({ error: "Internal server error." }) // 500 Internal Server Error
  }
}

const logout = async (req, res) => {
  try {
    const { error } = await supabase.auth.signOut({
      scope: "global"
    })

    if (error) {
      return res.status(400).json({ error: error.message })
    }

    return res.status(200).json({ message: "Sign out successful" })
  }
  catch (error) {
    return res.status(500).json({ error: "Internal Serval Error" })
  }
}

const getUser = async (req, res) => {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      if (error.name === "AuthSessionMissingError") {
        return res.status(403).json({ error: "User not authenticated" })
      }
      return res.status(401).json({ error: "Invalid or expired token" });
    }

    if (!user) {
      return res.status(403).json({ error: "User not authenticated" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error("Server getUser error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export { login, signUp, getUser, logout }