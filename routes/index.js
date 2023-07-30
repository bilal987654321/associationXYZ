var express = require('express');
var router = express.Router();
const fs = require('fs');
var path = require('path');
let ejs = require('ejs')

router.get('/', function(req, res, next) {
  fs.readFile(__dirname+'/../views/index.html',  'utf-8', (err, html) => {
    res.send(ejs.render(html, JSON.stringify("")))
  })
});

router.get('/index.html', function(req, res, next) {
  fs.readFile(__dirname+'/../views/index.html',  'utf-8', (err, html) => {
    res.send(ejs.render(html, JSON.stringify("")))
  })
});


router.get('/evenements.html', function(req, res, next) {
  fs.readFile(__dirname+'/../views/evenements.html',  'utf-8', (err, html) => {
    res.send(ejs.render(html, JSON.stringify("")))
  })
});
 
router.get('/contactus.html', function(req, res, next) {
  fs.readFile(__dirname+'/../views/contactus.html',  'utf-8', (err, html) => {
    res.send(ejs.render(html, JSON.stringify("")))
  })
});

module.exports = router;
