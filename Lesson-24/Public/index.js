var express = require('express');

var app = express();

app.get('/', function (req, res) {

    res.sendFile(__dirname + "/Static.html")
  
  });
  

app.use(express.static("public"));



app.listen(8080, function () {

   console.log('ExpressJS is running on port 8081');

});