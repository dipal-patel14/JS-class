function sum(a,b = 20)     //b have default value
{
  console.log("Entering function");
  let sum = a + b;
  console.log("The sum of a & b is --> " + sum);
  console.log("Leaving function");
}

sum(5);




function sum(a=20,b)
{
  console.log("Entering function");
  let sum = a + b;
  console.log("The sum of a & b is --> " + sum);
  console.log("Leaving function");
}

sum(5);   //output NaN aavse bcz actual parameter ni value a variable ne assign thase ane b variable undefined chai.