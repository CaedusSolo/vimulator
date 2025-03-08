const login = async (req, res) => {
  const {email, password} = req.body

  if (email && password) {
    console.log(`Email: ${email}`)
    console.log(`Password: ${password}`)
  }
}

const signUp = async (req, res) => {
  const {email, password} = req.body

  if (email && password) {
    console.log(`Email: ${email}`)
    console.log(`Password: ${password}`)
  }
}

export {login, signUp}