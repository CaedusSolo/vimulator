import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/game`

async function saveScore(score) {
  try {
    const response = axios.post(`${API_BASE_URL}/save-score`, {
      score: score
    })
    return response.data
  }
  catch (error) {
    return error.response.data
  }
}

async function getHighScore() {
  try {
    const response = await axios.get(`${API_BASE_URL}/get-high-score`)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
}

export { saveScore, getHighScore }