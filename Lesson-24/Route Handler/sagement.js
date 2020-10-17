var express = require('express');

var app = express();



var admin = express.Router() /* main router */



admin.get('/', function (req, res) {

  res.send('<h1>Admin Home Page</h1>')

})



admin.get('/settings', function (req, res) {

  res.send("<h1>Admin's Settings Page</h1>")

})

admin.get('/contacts', function (req, res) {

    res.send("<h1>Admin's contact Page</h1>")
  
  })
  


var user = express.Router() /*user is a sub router */



user.get('/', function (req, res) {

  res.send('<h1>User Home Page</h1>')

})



user.get('/settings', function (req, res) {

  res.send("<h1>User's Settings Page</h1>")

})

var user1 = express.Router()  /* user1 is a sub router */ 

user1.get('/', function (req, res) {

    res.send("<h1>User1's home Page</h1>")
  
  })

  user1.get('/settings', function (req, res) {

    res.send("<h1>User1's Settings Page</h1>")
  
  })
  
  

app.use("/admin",admin)



app.use("/user",user)

app.use("/user1",user1)

app.listen(8081, function () {

   console.log('ExpressJS is running on port 8081');

});