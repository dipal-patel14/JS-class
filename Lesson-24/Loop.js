
var express = require('express');

var app = express();



app.get('/', function (req, res) {

 var data = "";

 for(var i = 0 ; i < 10 ; i++){

    data += "<h1>Hello World!!</h1>";

 }

 res.send(data);

});



app.listen(8080, function () {

 console.log('ExpressJS is running on port 8081');

});


