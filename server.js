const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('mongodb connected'))
  .catch(err => console.log(err));

// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '../public'));

app.get('/', (req, res) => {
  res.render('index', {title: 'mern_ecommerce'});
});


app.get('/error', (req, res) => {
  res.render('error');
})

app.get('/layout', (req, res) => {
  res.render('layout');
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));