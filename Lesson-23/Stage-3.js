var EventEmitter = require("events");



console.log("Welcome to EventEmitter");



var em1 = new EventEmitter();



em1.on('overflow', () => {

 console.log('I am overflow Listener');

});



em1.emit('overflow');



em1.on('underflow', function(a, b) {

 console.log(a, b, this);

});



em1.emit('underflow', 'a', 'b');



em1.emit('underflow', 'c', 'd');



em1.on('underflow', (a, b) => {

 setImmediate(() => {

   console.log('this happens asynchronously');

 });

});



em1.emit('underflow', 'a', 'b');



console.log("Program Ends");

