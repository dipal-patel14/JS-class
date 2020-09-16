let obj1 = { 
    a:10, 
    b:20 
 };
 
 let obj2 = {
     c:30, 
     d:40 
 };
 
 let obj3 = {
     e:50, 
     f:60,
     __proto__: obj1
 };
 
 obj2.__proto__ = obj1;
 
//  console.log("OBJ1");
//  console.log(obj1.a);
//  console.log(obj1.b);
 
//  console.log("OBJ2");
//  console.log(obj2.a);
//  console.log(obj2.b);
//  console.log(obj2.c);
//  console.log(obj2.d);
 
//  console.log("OBJ3");
//  console.log(obj3.a);
//  console.log(obj3.b);
//  console.log(obj3.e);
//  console.log(obj3.f);
 
 obj2.a = 99;   //creating property for obj2

 delete obj2.a;     //deleting property of obj2
 obj3.a = 199;
 
//  console.log("OBJ1");
//  console.log(obj1.a);
//  console.log(obj1.b);
 
//  console.log("OBJ2");
//  console.log(obj2.a);
//  console.log(obj2.b);
//  console.log(obj2.c);
//  console.log(obj2.d);
 
//  console.log("OBJ3");
//  console.log(obj3.a);
//  console.log(obj3.b);
//  console.log(obj3.e);
//  console.log(obj3.f);

 console.log(obj2.a);
 console.log(obj3.a);