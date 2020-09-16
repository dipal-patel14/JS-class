function sum()      //with parameter
{
  let r = 0;
  console.log("Entering function");
  for(let i=0;i<arguments.length;i++)
  {
    r = r + arguments[i];
  }
  console.log("Leaving function");
  return r;
}

let result = sum(10,20,30,40);

console.log("The sum is --> " + result);