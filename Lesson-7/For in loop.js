var a = [10,20,30,40,50,60];

for(var i in a)
{
  console.log(a[i]);
}





var a = [10,20,30,40,50,60];

a[9] = 90;
for(var i in a)
{
  console.log("i = "+i);
  console.log("a["+i+"] = "+a[i]);
}





var a = [10,20,30,40];
console.log(a);
console.log(a.length);
a[11] = 85;
console.log(a.length);

for(k in a){
  console.log(k);
  console.log(a[k]);
}





var x = [20,30,400,50,60];
var sum = 0;

for(value in x){
  sum = sum +x[value];
}
console.log("sum of array is = " + sum);
