import express from 'express'
import {login, signUp} from "../controllers/authControllers"

const authRouter = express.Router()

authRouter.post("/login", login)
authRouter.post("/sign-up", signUp)

export default authRouter