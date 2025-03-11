import express from 'express'
import { login, signUp, logout, getUser } from "../controllers/authControllers.js"

const authRouter = express.Router()

authRouter.post("/login", login)
authRouter.post("/sign-up", signUp)
authRouter.post("/logout", logout)
authRouter.post("/get-user", getUser)

export default authRouter