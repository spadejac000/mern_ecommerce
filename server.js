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

// Product Model
const Product = require('./models/Product');

app.get('/', (req, res) => {
 Product
  .find()
  .then(products => res.json(products))
});

app.post('/', (req, res) => {
  const newProduct = new Product({
    albumId: req.body.albumId,
    id: req.body.id,
    title: req.body.title,
    thumbnailUrl: req.body.thumbnailUrl
  });
  newProduct
    .save()
    .then(product => res.json(product));
 });

 // @route   DELETE /:id
// @desc    Delete A Product
// @access  Public
app.delete('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(product => product.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));