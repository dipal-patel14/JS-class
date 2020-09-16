let a = [10,20,30,40,50,60];   //do while
let b = 10;

let i = 0;
let flag = false;

do
{
  if(b == a[i])
  {
    console.log("Number is Found");
    flag = true;
    break;
  }
  i++;

}while(i<a.length);

if(flag == false)
{
  console.log("Sorry Number is Not Found :(");
}



let a = [10,20,30,40,50,60];   //while
let b = 10;

let i = 0;
let flag = false;

while(i<a.length)
{
  if(b == a[i])
  {
    console.log("Number is Found");
    flag = true;
    break;
  }
  i++;
}

if(flag == false)
{
  console.log("Sorry Number is Not Found :(");
}







let a = [10,20,30,40,50,60];    //for loop
let b = 10;

let i = 0;
let flag = false;

for(let i=0;i<a.length;i++)
{
  if(b == a[i])
  {
    console.log("Number is Found");
    flag = true;
    break;
  }
}

if(flag == false)
{
  console.log("Sorry Number is Not Found :(");
}