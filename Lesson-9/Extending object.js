var obj = {    //we are creating properties.

    a : "mumbai",

    b : 20

};



console.log(obj);

console.log(obj.a);

console.log(typeof(obj.a));

console.log(obj.b);

//console.log(obj.c);  //undefined


obj.c = 30;  // creating property

console.log(typeof(obj.c));

console.log(obj.c);

obj.d = 100;

console.log(obj.d);

console.log(obj);


obj.k = true;

console.log(obj.k);

obj.m = "cat";

console.log(obj.m);


console.log(obj);


obj.n = null;

console.log(obj.n);

console.log(obj);

obj.o = "";

console.log(obj.o);

console.log(obj);



//anand
var obj = {
    a: 20,
    b: 30,
  };
  console.log(obj.a);
  obj.c = 40;
  obj.d = { a: 50 };
  obj.a = "mumbai";
  
  delete obj.c;
  console.log(obj);