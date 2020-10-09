var express = require('express');

var app = express();



var allocate = function (req,res,next){

                   console.log("Doing some Resource Allocation before the main hadler");

                   next();

               };



var main = function (req,res,next){

               console.log("Doing some operations and sending data to the browser");

               res.send("<h1>!!!Important Data!!!</h1>");

               next();

           };





app.get("/",



  [allocate,main],



  function (req,res){

    console.log("Doing some Resource Deallocation after the main hadler");

  }



);



app.listen(8081, function () {

   console.log('ExpressJS is running on port 8081');

});