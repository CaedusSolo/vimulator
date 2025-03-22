import axios from 'axios'
import "dotenv/config"

const API_BASE_URL = `${process.env.API_BASE_URL}/auth`

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

async function logout() {
  try {
    const response = await axios.post(`${API_BASE_URL}/logout`)
    return response.data
  }
  catch (error) {
    return {
      error: error.response.data
    }
  }
}


export { login, signUp, getUser, logout }