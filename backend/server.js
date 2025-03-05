//  imports
import express from "express"
import cors from "cors"
import supabase from "./config/supabase.js"

//  setup
const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())

console.log("SUPABASE DETAILS HERE:")
console.log(supabase)


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))