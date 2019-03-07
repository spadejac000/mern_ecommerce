const express = require('express');
const request = require('request');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// bodyparser middleware
app.use(bodyParser.json());

// db config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('mongodb connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  request(url, (err, reponse, body) => {
    products_json = JSON.parse(body);
    console.log(products_json);

    res.status(200).json(products_json);
  })
});


app.get('/error', (req, res) => {
  res.render('error');
})

app.get('/layout', (req, res) => {
  res.render('layout');
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));