import express from 'express'
import { saveScore } from '../controllers/gameControllers.js'

const gameRouter = express.Router()

gameRouter.post("/save-score", saveScore)

export default gameRouter