
//Stage -1

const { application } = require("express")

// var express = require("express");

// var io = require("socket.io")();

// var app = express();



// app.get("/Hello",(req,res) => {

// res.sendFile(__dirname + "/index.html");

// });



// var hserver = app.listen(8000,() => console.log("Server Started at 8000"));



// io.listen(hserver);



// io.on('connection',(socket) => {

// console.log("User Connected")

// socket.send("Highway to browser");

// socket.on('disconnect',() => console.log("User Disconnected"));

// });


//Stage -2


// var express = require("express");

// var io = require("socket.io")();

// var app = express();



// app.get("/Hello",(req,res) => {

// res.sendFile(__dirname + "/index.html");

// });



// var hserver = app.listen(8000,() => console.log("Server Started at 8000"));



// io.listen(hserver);



// io.on('connection',(socket) => {

// console.log("User Connected")

// socket.emit('CustomEvent', { times:10 , message:"Socket IO" });

// socket.on('disconnect',() => console.log("User Disconnected"));

// });

// Stage -3

// var express = require("express");

// var io = require("socket.io")();

// var app = express();



// app.get("/Hello",(req,res) => {

// res.sendFile(__dirname + "/index.html");

// });



// var hserver = app.listen(8000,() => console.log("Server Started at 8000"));



// io.listen(hserver);



// io.on('connection',(socket) => {

// console.log("User Connected")

// socket.emit('CustomEvent', { times:10 , message:"Socket IO" });

// socket.on('disconnect',() => console.log("User Disconnected"));

// });



// Stage -4


// var express = require("express");

// var io = require("socket.io")();

// var app = express();



// app.get("/Hello",(req,res) => {

// res.sendFile(__dirname + "/index.html");

// });



// var hserver = app.listen(8000,() => console.log("Server Started at 8000"));



// io.listen(hserver);



// io.on('connection',(socket) => {

// console.log("User Connected")

// socket.emit('CustomEvent');

// socket.on('disconnect',() => console.log("User Disconnected"));

// socket.on('getData',() => {

// console.log("getData Called");

// socket.emit('setData',"Data from some DB");

// });

// });


// Chat application

var express = require("express");

var io = require("socket.io")();

var app = express();





app.get("/Chat",(req,res) => {

res.sendFile(__dirname + "/Chat.html");

});



var hserver = app.listen(8000,() => console.log("Server Started at 8000"));



io.listen(hserver);



io.on('connection',(socket) => {

console.log("User Connected");

socket.join("chatroom");

socket.on('sendMessage',(payload) => io.in("chatroom").emit('message',payload));

socket.on('disconnect',() => console.log("User Disconnected"));

});



