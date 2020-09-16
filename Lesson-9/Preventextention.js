// var obj = {

//     a : 10,   // a is a propery of obj

//     b : 20

// };



// console.log(obj);

// Object.preventExtensions(obj);

//  delete obj.a;    //delete is possible

// console.log(obj);

// obj.b = 30;     //update the variable is possible

// console.log(obj);

// obj.c = 40;     //creation of variable is not  possible

// console.log(obj);














var obj = {

    a : 10,   // a is a propery of obj

    b : 20

};



console.log(obj);

Object.preventExtensions(obj);

//  delete obj.a;    //delete is not possible

// console.log(obj);

// obj.b = 30;     //update the variable is possible

// console.log(obj);

// obj.c = 40;     //creation of variable is not  possible

// console.log(obj);

console.log(Object.isExtensible(obj));

obj.c = 40;     //creation of variable is not  possible

console.log(obj);