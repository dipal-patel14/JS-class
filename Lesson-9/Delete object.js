var obj = {

    a : 10,

    b : 20,
    d : 40
};



console.log(obj);

console.log(obj.a);

console.log(obj.b);
console.log(obj.d);


obj.c = 30;

console.log(obj.c);

console.log(obj);



delete obj.c;   //deleting object

console.log(obj);

delete obj.d;

console.log(obj);
