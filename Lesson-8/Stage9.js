function f1(a,b)
{
  console.log("Entering function");
  let sum = a + b;
  let average = sum / 2;
  let r = [sum,average]
  console.log("Leaving function");
  return r;
}

let result = f1(10,20);
let [v1,v2] = f1(10,20);

console.log("The result is --> " + result);

console.log("The sum is --> " + v1);
console.log("The average is --> " + v2);