const dotenv = require("dotenv")
dotenv.config()
var path = require('path')
const express = require('express')
const fetch = require("node-fetch")
const app = express()

const bodyParser = require("body-parser")
const cors = require("cors")
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('dist'))

app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/test', async function (req, res) {
    const number = req.body.number
    let response = await fetch(process.env.API_URL + number)
    let post = await response.json()
    if (post && response.ok) {
        res.send(post)
    }
    else {
        res.status(400).send({ message: "server error , please make sure your number is valid" })
    }
})

module.exports = {
    app
}
