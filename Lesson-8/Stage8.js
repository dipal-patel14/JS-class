function sum(...a)       //Rest parameter/last parameter
{
  let r = 0;
  console.log("Entering function");
  for(let i=0;i<a.length;i++)
  {
    r = r + a[i];
  }
  console.log("Leaving function");
  return r;
}

let result = sum(10,20,30,40);

console.log("The sum is --> " + result);