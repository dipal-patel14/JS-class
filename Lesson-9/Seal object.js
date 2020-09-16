var obj = {

    a : 10,   // a is a propery of obj

    b : 20,
    
    c : 30
};



console.log(obj);

Object.seal(obj);


obj.c = 34;   // no create object

delete obj.a; // no delete

obj.b = "dipal";   //we can update

console.log(obj);

console.log(Object.isSealed(obj));




// var obj = {

//     a : 10,   // a is a propery of obj

//     b : 20,
    
//     c : 30
// };



// console.log(obj);

// Object.seal(obj);
// Object.freeze(obj);  //more restricted object



//  delete obj.b;  //no delete 

//  console.log(obj);

//  obj.b = "kruns";  // no update
//  console.log(obj);
 
//  obj.k = 90;       // no creation
//  console.log(obj);

 