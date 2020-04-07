const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
var aylien = require("aylien_textapi"); // added 4-6-2020
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

// console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
const port = 8080;

app.listen(port, function () {
    console.log(`Example app listening on port: ${port}!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

/*
I changed the above from ...

// designates what port the app will listen to for incoming requests

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})
*/