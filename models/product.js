const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ProductSchema = new Schema({
  albumId: {
    type: Number, 
    required: true
  },
  id: {
    type: Number, 
    required: true
  },
  title: {
    type: String, 
    required: true
  },
  thumbnailUrl: {
    type: String, 
    required: true
  }
});

module.exports = mongoose.model('product', ProductSchema);