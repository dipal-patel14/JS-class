var obj = {

    a : 10,   // a is a propery of obj

    b : 20

};



console.log(obj);

Object.freeze(obj);

obj.a = 30;   //update
console.log(obj);

delete obj.a;  //delete
console.log(obj);

obj.d = 30;  //create
console.log(obj);

console.log(Object.isFrozen(obj));


