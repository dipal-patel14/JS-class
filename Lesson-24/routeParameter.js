var express = require('express');

var app = express();



app.get('/print/:msg/:times', function (req, res) {

  var times = req.params.times;

  var message = req.params.msg;

  if(times === undefined){

     times = 10;

  }

  else

  {

      times = parseInt(times);

  }

  if(message === undefined){

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