function sum(a,b)     //return statement
{
  console.log("Entering function");
  let r = a + b;
  console.log("Leaving function");
  return r;
}

let result = sum(10,60);

console.log("The sum is --> " + result);