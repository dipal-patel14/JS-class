// var express = require('express');

// var app = express();



// app.get("/test",(request, response)=>{

// response.send("<h1>Executing Test Handler</h1>");

// });



// app.listen(8089,()=>{

// console.log("Express server started at port 8089");

// });



// app.use(express.static("public"));

// console.log("Starting Stage1");




// Stage 2

// var express = require('express');

// var app = express();



// app.get("/test",(request, response)=>{

// response.send("<h1>Executing Test Handler</h1>");

// });



// app.get("/jsonendpoint",(request, response)=>{

// response.setHeader('Content-Type', 'application/json');

// response.send(JSON.stringify({x:1,y:2}));

// });



// app.listen(8089,()=>{

// console.log("Express server started at port 8089");

// });



// app.use(express.static("public"));

// console.log("Staring Stage2");


// stage 3

// var express = require('express');

// var app = express();



// app.get("/test",(request, response)=>{

// response.send("<h1>Executing Test Handler</h1>");

// });



// app.get("/hello",(request, response)=>{

// var data = "";

// var times = request.query.times;

// var message = request.query.message;

// times = (times === undefined )? 5 : parseInt(times);

// message = (message === undefined )?"Hello" : message;


// for(var i = 0; i <times ; i++){

// data += "<h1>"+message+ "</h1>";

// }

// response.send(data);

// });



// app.get("/jsonendpoint1",(request, response)=>{

// response.setHeader('Content-Type', 'application/json');

// response.send(JSON.stringify({x:1,y:2}));

// });



// app.get("/jsonendpoint2",(request, response)=>{

// response.setHeader('Content-Type', 'application/json');

// response.send(JSON.stringify({message: "I Love AJAX",times:3}));

// });



// app.listen(8081,()=>{

// console.log("Express server started at port 8089");

// });



// app.use(express.static("public"));

// console.log("Staring Stage3");


// stage 4


var express = require('express');

var bodyParser = require('body-parser');

var app = express();



app.use( bodyParser.json() ); // to support JSON-encoded bodies



app.use(bodyParser.urlencoded({ // to support URL-encoded bodies

extended: true

}));



app.get("/test",(request, response)=>{

response.send("<h1>Executing Test Handler</h1>");

});



app.get("/hello",(request, response)=>{

var data = "";

var times = request.query.times;

var message = request.query.message;

times = (times === undefined )? 5 : parseInt(times);

message = (message === undefined )?"Hello" : message;


for(var i = 0; i <times ; i++){

data += "<h1>"+message+ "</h1>";

}

response.send(data);

});



app.post("/hello",(request, response)=>{

console.log(request);

var data = "";

var times = request.body.times;

var message = request.body.message;

times = (times === undefined )? 5 : parseInt(times);

message = (message === undefined )?"Hello" : message;


for(var i = 0; i <times ; i++){

data += "<h1>"+message+ "</h1>";

}

response.send(data);

});



app.get("/jsonendpoint1",(request, response)=>{

response.setHeader('Content-Type', 'application/json');

response.send(JSON.stringify({x:1,y:2}));

});



app.get("/jsonendpoint2",(request, response)=>{

response.setHeader('Content-Type', 'application/json');

response.send(JSON.stringify({message: "I Love AJAX",times:3}));

});



app.listen(8081,()=>{

console.log("Express server started at port 8081");

});



app.use(express.static("public"));

console.log("Staring Stage4");


