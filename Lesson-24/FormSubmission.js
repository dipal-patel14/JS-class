var express = require('express');

var bodyParser = require('body-parser');

var app = express();



app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function (req, res) {

  res.sendFile(__dirname + "/index.html")

});



app.post('/Hello', function (req, res) {

  var times = req.body.times;

  var message = req.body.msg;

  if(times === ""){

     times = 10;

  }

  else

  {

      times = parseInt(times);

  }

  if(message === ""){

     message = "Hello World";

  }

   var data = "";

   for(var i = 0 ; i < times ; i++){

     data += "<h1>" + message + "</h1>";

   }

   res.send(data);

});



app.listen(8080, function () {

   console.log('ExpressJS is running on port 8081');

});
