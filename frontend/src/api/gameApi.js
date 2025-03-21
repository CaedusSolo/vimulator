import axios from "axios";

const API_BASE_URL = "http://localhost:5000/game"

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

export { saveScore }