const express = require('express');
const router = express.Router();

router.use(express.static(__dirname + '../../../public'));

router.get('/index', (req, res) => {
  res.render('index');
})

router.get('/error', (req, res) => {
  res.render('error');
})

router.get('/layout', (req, res) => {
  res.render('layout');
})