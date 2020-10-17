var express = require('express');  /*lesson 27 modulation */

var app = express();



var admin = require('./admin');

var user = require('./user');



app.use("/admin",admin)



app.use("/user",user)



app.listen(8081, function () {

   console.log('ExpressJS is running on port 8081');

});