// const dotenv = require("dotenv")
import dotenv from "dotenv"
dotenv.config()
// const mockAPIResponse = require('./mockAPI.js')
// import {mockAPIResponse} from "./mockAPI"
// var path = require('path')
import path from "path"
// const express = require('express')
import express from "express"
// const fetch = require("node-fetch")
import fetch from "node-fetch"
const app = express()

// const bodyParser = require("body-parser")
import bodyParser from "body-parser"
// const cors = require("cors")
import cors from "cors"
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

app.post('/test', async function (req, res) {
    // console.log("/test")
    const url = req.body.url
    let response = await fetch(`${process.env.ANALYSIS_API_LINK}?key=${process.env.API_KEY}&url=${url}&lang=en`)
    let post = await response.json()
    if (post && response.ok) {
        res.send(post)
    }
    else {
        res.status(400).send({ message: "server error , please make sure your URL is valid" })
    }
})

// designates what port the app will listen to for incoming requests
const PORT = 3000
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

export default { app }

// module.exports = {
//     app
// }
