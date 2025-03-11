import axios from 'axios'

const API_BASE_URL = "http://localhost:5000/auth"

async function login(email, password) {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email: email,
      password: password
    })
    return response.data
  }
  catch (error) {
    return error.response.data
  }
}

async function signUp(email, password) {
  try {
    const response = await axios.post(`${API_BASE_URL}/sign-up`, {
      email: email,
      password: password
    })
    return response.data
  }
  catch (error) {
    return error.response.data
  }
}

async function getUser() {
  try {
    const response = await axios.get(`${API_BASE_URL}/get-user`)
    return response.data
  }
  catch (error) {
    return {
      user: null,
      error: error.response.data
    }
  }
}


export { login, signUp, getUser }