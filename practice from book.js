// Array
let log = console.log;

// var dipal = [{},true,"a"];   // creating Array with various data types
// console.log(dipal[0]);


// var base = 1024;   //value will not constant they may be arbitrary expressions
// console.log(base, base+1, base+2, base+3);


// var b = [[1,{x:10,y:20}],[2,{a:30,b:40}]];  // Arrays contains object and other arrays
// console.log(b[1][1]);


// var count = [1,,3];  //Arrays contains 2 commas between values with missing elements
// console.log(count[1]);  //missing elements are undefined


// var under = [,,];  //optional trailing comma,No elements but length of array is 2
// console.log(under);

// var a = new Array(12,22);  //creating new array with constructor
// console.log(a); //[value array ma aapse]  we can use this technique when we pre allocate array and later how mant element we need.

// var a = new Array(12,22,34,"test");
// console.log(a);

 //let a =["world"]; //single element
// log(`${a}`)

// let value =a[0]; //read element 0
// log(`${value}`)

// a[1] = 3.14;    // index 1 assign 2 write element
// log(`${a}`)

// let i = 2;
//  log(`${i}`)

// a[i] = 3;
// log(`${a}`)

// a[i+1] = "hello";
// log(`${a}`)

//[].length      //checking array length
//log(`${[].length}`)
//log(`${['a','b','c'].length}`)

// a=[1,2,3,4,5]; 
// log(`${a}`)
// a.length = 10;
// //a = new Array(3);
// log(`${a.length}`) 


                                //Array methods

                                   //join()

// let a = [1,2,3];
// log(`${a.join()}`);  //convert all elements in to string
// log(`${a.join(" ")}`);  //remove the comma between the value
// log(`${a.join("")}`);   //merge the value in in one
// log(`${a.join('-')}`); //every element between put - sign

// let b = new Array(5);
// log(`${b.join('-')}`);  //a string of 4 hyphens

                                //reverse()

// let a = [1,2,3];
// log(`${a.reverse().join()}`)
// a[0]
// log(`${a[2]}`)  //reverse array store thai jase output 1 aavse


                                //sort()

// var a = [1,5,6,3,2,8,0];
// a.sort()
// log(`${a}`)

// var a = new Array(43,12,39);  //creating array with argument
// a.sort()
// log(`${a}`)


// var c = ["bug","cat","ant"]
// c.sort()
// log(`${c}`)


                                //concat()

// var a = [1,2,3];

// log(`${a.concat(4,5,6,7,8,9)}`)


                                  //slice()
// var a = [1,2,3,4,5];
// log(`${a.slice(0,2)}`) //last index will not print 1,2,3
// log(`${a.slice(3)}`)  // this index and after all index will print 4,5
// log(`${a.slice(1,-1)}`) //-1 last element will not print 2,3,4
// log(`${a.slice(-3,-2)}`) // 3 will print


                                  //Splice()
 var a = [1,2,3,4,5,6,7,8];
 log(`${a.splice(5)}`)  //begining 4 elements will deleted 5,6,7,8
 log(`${a}`)
 log(`${a.splice(1,2)}`) //2,3
 log(`${a}`)
 log(`${a.splice(1,1)}`) //4
 log(`${a}`)

// var a = [1,2,3,4,5];
// log(`${a.splice(2,0,'a','b')}`)  //1,2,a,b,3,4,5
// log(`${a}`)
// log(`${a.splice(2,2,3)}`)  //1,2,3,3,4,5
// log(`${a}`)


                             //push()and pop()

// var stack = [];
// log(`${stack.push(1,2)}`);  //length 2
// log(`${stack}`)

// log(`${stack.pop()}`); //last element will deleted 2
// log(`${stack}`)

// log(`${stack.push(3)}`); // add element 1,3
// log(`${stack}`)

// log(`${stack.push([4,5])}`); //create new elements 1,3,4,5
// log(`${stack}`)


                           //toString()


// log(`${[1,2,3].toString()}`)  // convert each element into String
// log(`${['a','b','c'].toString()}`)                          
// log(`${[1,[2,'c']].toString()}`)  


//ECMAScript5 define new methods.  1) forEach()

// var data = [1,2,3,4,5];
// var sum = 0;
// data.forEach(function(value){sum += value; }); // 15
// log(`${sum}`)

// //increment each array element
// data.forEach(function(v,i,a){ a[i] = v + 1; }); //first element will remove and make space for new element
// log(`${data}`)  //2,3,4,5,6

                               // 2) map()
// a = [1,2,3];
// b = a.map(function(x) { return x*x ;}) // multiply the elements 1,4,9
// log(`${b}`)


                             // 3)filter()


// a = [5,4,3,2,1];
// log(`${a.filter(function(x) { return x < 4})}`); // <4 value will display
// log(`${a.filter(function(x,i) { return i%2 ==0 })}`); //not divided by 2 value will display
                         
  


                        

