function f1(a,b)
{
  console.log("Entering function");
  let s = a + b;
  let av = s / 2;
  let r = {
            sum : s,
            average : av
          };
  console.log("Leaving function");
  return r;
}

let result = f1(10,20);
let {average:v1,sum:v2} = f1(10,20);

console.log("The result is --> ",result);

console.log("The sum is --> ",v1);
console.log("The average is --> ",v2);