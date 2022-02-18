import express from "express"

import { __dirname } from "./utils.js"

const app = express()
const PORT = 8080
const server= app.listen(PORT, ()=> {
    console.log(`listen ${PORT}`)
})