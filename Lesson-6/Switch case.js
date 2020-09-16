let i = 10;     //Scenario 1

switch(i)
{
  case 10 : console.log("In case 10");break;

  case 20 : console.log("In case 20");break;

  default : console.log("default");break;
}






let i = 20;     //Scenario 2

switch(i)
{
  case 10 : console.log("In case 10");break;

  case 20 : console.log("In case 20");break;

  default : console.log("default");break;
}






let i = 30;   // Scenario 3

switch(i)
{
  case 10 : console.log("In case 10");break;

  case 20 : console.log("In case 20");break;

  default : console.log("default");break;
}





let i = 13;

switch(i)
{
  case 13 || 15 || 10 : console.log("In case 10"); 
            console.log("In case 100");break;

  case 10*2 : console.log("In case 20");break;

  default : console.log("default");break;
}





let i = 10;

switch(i)
{
  case 13 && 15 && 10 : console.log("In case 10"); 
            console.log("In case 100");break;

  case 10*2 : console.log("In case 20");break;

  default : console.log("default");break;
}