const express = require('express');
const request = require('request');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// api
const url = 'https://jsonplaceholder.typicode.com/photos?albumId=1'

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('mongodb connected'))
  .catch(err => console.log(err));

// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '../public'));

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