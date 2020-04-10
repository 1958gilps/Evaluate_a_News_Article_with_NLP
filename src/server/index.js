const dotenv = require('dotenv');
dotenv.config();

var aylien = require("aylien_textapi");

// aylien API credentials
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
  });

const path = require('path')
const mockAPIResponse = require('./mockAPI.js');

// Set up express
const express = require('express');
// Start an instance of app
const app = express();

// Middleware
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist')); // @todo make this dir in ../..

// console.log(__dirname)

app.get('/', function (req, res) {
  res.sendFile('dist/index.html') // @todo update this path
  // res.send(JSON.stringify(process.env));
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
const port = 8080;

// Setup Server
const server = app.listen(port, listening);

function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}`);
  }
  
  app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
  });

 // const projectData = {};

app.post('/sentiment', (req, res) => {
  const { query } = req.body; // const query = req.body.query
  textapi.sentiment(query, (error, response) => {
    if (error === null) {
      console.log(response);
      res.send(response);
    }
  });
});

//  https://api.aylien.com/api/v1/absa/hotels

  // POST
app.post('/add', (req, res) => {
  //projectData.aspect = req.body.aspect
  //res.send(projectData);
  
});
  
  // GET
  app.get('/add', function (req, res) {
    textapi.add(
      {
        text: projectData.aspect,
      },
      function (error, response) {
        if (error === null) {
          res.send(response);
        }
      }
    );
  });