var express = require('express');

var app = express();



app.get("/",



    function (req,res,next)

    {

        console.log("Preprocessing 1");

        next();

        console.log("Postprocessing 1");

    },



    function (req,res,next)

    {

       console.log("Preprocessing 2");

       res.send("<h1>Please Check the Console Window of Node js</h1>");

       next();

       console.log("Postprocessing 2");

    },



    function (req,res)

    {

        console.log("Preprocessing 3");

        console.log("Postprocessing 3");

    }



);



app.listen(8081, function () {

   console.log('ExpressJS is running on port 8081');

});