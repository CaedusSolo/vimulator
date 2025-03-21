//  imports
import express from "express"
import cors from "cors"
import authRouter from "./routes/authRoutes.js"
import gameRouter from "./routes/gameRoutes.js"

//  setup
const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())
app.use("/auth", authRouter)
app.use("/game", gameRouter)


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))