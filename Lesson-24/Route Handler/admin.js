var express = require('express'); /* lesson 27*/ 



var admin = express.Router();



admin.get('/', function (req, res) {

  res.send('<h1>Admin Home Page</h1>')

})



admin.get('/settings', function (req, res) {

  res.send("<h1>Admin's Settings Page</h1>")

})

admin.get('/hi', function (req, res) {

    res.send("<h1>Admin's about Page</h1>")
  
  })
  

module.exports = admin;