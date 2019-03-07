const Product = require('../models/product');
const mongoose = require('mongoose');

// DB Config
const db = require('../config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('mongodb connected'))
  .catch(err => console.log(err));

const products = [new Product(
  {
    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Basketball.png/220px-Basketball.png',
    title: 'Basketball',
    description: 'This is a basketball!!!',
    price: 100
  },
  {
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/810s6el6lYL._SX425_.jpg',
    title: 'Football',
    description: 'This is a football...',
    price: 2
  },
  {
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/810s6el6lYL._SX425_.jpg',
    title: 'Football',
    description: 'This is a football...',
    price: 98
  },
  {
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/810s6el6lYL._SX425_.jpg',
    title: 'cribbage',
    description: 'This is a football...',
    price: 99
  },
  {
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/810s6el6lYL._SX425_.jpg',
    title: 'baton',
    description: 'This is a football...',
    price: 8
  },
  {
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/810s6el6lYL._SX425_.jpg',
    title: 'Golfball',
    description: 'This is a football...',
    price: 9
  })
];

let done = 0;
for (let i = 0; i < products.length; i++) {
  products[i].save((err, result) => {
    done++;
    if(done === products.length) {
      exit();
    }
  });
}

const exit = () => {
  mongoose.disconnect();
}