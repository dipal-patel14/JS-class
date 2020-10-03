var EventEmitter = require("events");



console.log("Welcome to EventEmitter");



var myEmitter = new EventEmitter();



myEmitter.on('overflow', () => {

 console.log('I am overflow Listener');

});



myEmitter.emit('overflow');



myEmitter.on('underflow', function(a, b) {

 console.log(a, b, this);

});



myEmitter.emit('underflow', 'a', 'b');



myEmitter.on('underflow', (a, b) => {

 setImmediate(() => {

   console.log('this happens asynchronously');

 });

});



myEmitter.emit('underflow', 'a', 'b');



var m = 0;



myEmitter.on('overflow', () => {

 console.log(++m);

});



myEmitter.emit('overflow');



myEmitter.emit('overflow');



console.log("Program Ends");