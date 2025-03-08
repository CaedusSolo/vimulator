import axios from 'axios'

const API_BASE_URL = "http://localhost:5000/auth"

async function login(email, password) {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email: email,
      password: password
    })
    return "Success"
  }
  catch (error) {
    return error
  }
}

async function signUp(email, password) {
  try {
    const response = await axios.post(`${API_BASE_URL}/sign-up`, {
      email: email,
      password: password
    })
    return "Success"
  }
  catch (error) {
    return error
  }
}

async function resetPassword(email, password, newPassword) {
}

export { login, signUp, resetPassword }