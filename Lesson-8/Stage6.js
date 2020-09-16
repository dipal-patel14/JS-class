function sum()     // argument array
{
  console.log("Entering function");
  let r = arguments[0] + arguments[1];
  console.log("Leaving function");
  return r;
}

let result = sum(10,60);

console.log("The sum is --> " + result);