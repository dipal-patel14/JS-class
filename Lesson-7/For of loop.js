var a = [10,20,30,40,50];

for( v of a){    //of means original value
  console.log(v);
}




var a = [10,20,30,40,50,60];

for(var i of a)
{
  console.log(i);
}



var a = [10,20,30,40,50,60];
a[9] = 90;
for(var v of a)
{
  console.log(v);
}



var a = [10,20,30,40];
console.log(a);
console.log(a.length);
a[11] = 85;
console.log(a.length);

for(k of a){
       console.log(k);
} 




var x = [20,30,400,50,60];
var sum = 0;

for(value of x){
  sum = sum +value;
}
console.log("sum of array is = " + sum);