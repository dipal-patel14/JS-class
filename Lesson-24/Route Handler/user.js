var express = require('express');



var user = express.Router();



user.get('/', function (req, res) {

  res.send('<h1>User Home Page</h1>')

})



user.get('/settings', function (req, res) {

  res.send("<h1>User's Settings Page</h1>")

})

user.get('/search', function (req, res) {

    res.send('<h1>User about Page</h1>')
  
  })



module.exports = user;