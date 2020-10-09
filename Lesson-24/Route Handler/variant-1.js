var express = require('express');

var app = express();



app.get("/",



    function (req,res,next)

    {

        console.log("Doing some Resource Allocation before the main hadler");

        next();

    },



    function (req,res,next)

    {

        console.log("Doing some operations and sending data to the browser");

        res.send("<h1>!!!Important Data!!!</h1>");

        next();

    },



    function (req,res)

    {

        console.log("Doing some Resource Deallocation after the main hadler");

    }



);



app.listen(8080, function () {

   console.log('ExpressJS is running on port 8081');

});