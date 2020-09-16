let a = [10,20];      //Spread operator

function sum(a,b)
{
  console.log("Entering function");
  let sum = a + b;
  console.log("The sum of a & b is --> " + sum);
  console.log("Leaving function");
}

sum(...a);




let b = [30,40,50,60,78];

console.log(b);
console.log(...b);