console.log("Welcome to Higher Order Functions");

function Server(f)
{
  console.log("Task 1");
  f();
  console.log("Task 3");
}

function Client1()
{
  console.log("Entering Client1");
  Server(
    () => console.log("Task 2 - v1")
  );
  console.log("Leaving Client1");
}

function Client2()
{
  console.log("Entering Client2");
  Server(
    () => console.log("Task 2 - v2")
  );
  console.log("Leaving Client2");
}

function Client3()
{
  console.log("Entering Client3");
  Server(
    () => console.log("Task 2")
  );
  console.log("Leaving Client3");
}

Client1();
Client2();
Client3();