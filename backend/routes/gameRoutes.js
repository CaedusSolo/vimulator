import express from 'express'
import { saveScore, getHighScore } from '../controllers/gameControllers.js'

const gameRouter = express.Router()

gameRouter.post("/save-score", saveScore)
gameRouter.get("/get-high-score", getHighScore)

export default gameRouter