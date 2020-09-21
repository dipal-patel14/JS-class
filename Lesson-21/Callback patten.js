console.log("Welcome to Higher Order Functions");

function v1()
{
  console.log("Task 2 - v1");
}

function v2()
{
  console.log("Task 2 - v2");
}

function v()
{
  console.log("Task 2");
}

function Server (f = v)   //default value for v
{
  console.log("Task 1");
  f();
  console.log("Task 3");
}

function Client1()
{
  console.log("Entering Client1");
  Server(v1);
  console.log("Leaving Client1");
}

function Client2()
{
  console.log("Entering Client2");
  Server(v2);
  console.log("Leaving Client2");
}

function Client3()
{
  console.log("Entering Client3");
  Server();
  console.log("Leaving Client3");
}

Client1();
Client2();
Client3();