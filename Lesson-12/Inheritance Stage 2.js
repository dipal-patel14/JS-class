// let obj1 = { 
//     a:10, 
//     b:20 
// };

// let obj2 = {
//     c:30, 
//     d:40,
//     //b:100 
// };

// obj2.__proto__ = obj1;


// console.log("OBJ1");
// console.log(obj1.a);
// console.log(obj1.b);

// console.log("OBJ2");
// console.log(obj2.a);
// console.log(obj2.b);
// console.log(obj2.c);
// console.log(obj2.d);






let obj1 = { 
    a:10, 
    b:20 
};


let obj2 = {
    c:30, 
    d:40 
};
let obj3 = {

    x:50,
    y:60 
};

obj2.__proto__ = obj1;
obj3.__proto__ = obj1; 

console.log("OBJ1");
console.log(obj1.a);
console.log(obj1.b);

console.log("OBJ2");
console.log(obj2.a);
console.log(obj2.b);
console.log(obj2.c);
console.log(obj2.d);

console.log(obj3.x);
console.log(obj3.y);

  