var a = [10,20,30,40,50];
var i =0;                   // i change the index 
do{
  console.log(a[i]);
  i++;
}while(i< a.length);

var a = [10,20,30,40,50];
for(var i =0;i<a.length;i++){
  console.log(a[i]);
  console.log("Dipal");
}




var a = [10,20,30,40,50];
var i =0;

while(i<6){
console.log(a[i]);
i++;
}
var a = [10,20,30,40,50];
for(index in a){  //in means index

 console.log(index);
  console.log(a[index]);
}



var a = [10,20,30,40,50,60,70];

var i = 0;
var sum =0;
do{
  sum =sum +a[i];
  i++;
}while(i<a.length);

console.log(sum);





var a = [10,20,30,40,50,60,70];
var i = 0;
var sum =0;
do{
  sum =sum +a[i];
  i++;
}while(i<a.length);

console.log(sum);

while(i<a.length){
  sum =sum +a[i];
     i++;
}
console.log(sum);





var x = [1,2,3,4,5,6,7];

console.log(x);
console.log(x.length);

x[20] = 60;

console.log(x.length);

var x = [20,30,40,50,60];
var i =0;
var sum =0;
do{
  sum = sum + x[i]; 
  i++;
}while(i < x.length);

console.log("sum of array is = " + sum);





var x = [20,30,40,50,60];
var i =0;
var sum =0;
while(i < x.length){
  sum = sum + x[i]; 
  i++;
}
console.log("sum of array is = " + sum);





var x = [20,300,40,50,60];
var i;
var sum =0;
for(var i =0;i < x.length; i++){
 
sum = sum + x[i]; 
}

console.log("sum of array is = " + sum);




var x = [20,30,40,50,60];
var i =0;
var sum =0;
while(i < x.length){
  sum = sum + x[i]; 
  i++;
}

console.log("sum of array is = " + sum);
