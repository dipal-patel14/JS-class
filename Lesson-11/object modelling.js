// var pg1 = {
//     balance: 0,
//     lt: 0,
//     deposit : deposit1,
//     withdraw : withdraw1,
//     statement : statement1
// };

// var pg2 = {
//     balance: 0,
//     lt: 0,
//     deposit : deposit2,
//     withdraw : withdraw2,
//     statement : statement2
// };

// function deposit1(v)
// {
//     pg1.balance = pg1.balance + v;
//     pg1.lt = v;
// }
// function withdraw1(v)
// {
//     if (pg1.balance >= v)
//     {
//         pg1.balance = pg1.balance - v;
//         pg1.lt = -v;
//     }
// }
// function statement1()
// {
//     console.log("Balance = " + pg1.balance);
//     console.log("Last Transction = " + pg1.lt);
// }

// function deposit2(v)
// {
//     pg2.balance = pg2.balance + v;
//     pg2.lt = v;
// }
// function withdraw2(v)
// {
//     if (pg2.balance >= v)
//     {
//         pg2.balance = pg2.balance - v;
//         pg2.lt = -v;
//     }
// }
// function statement2()
// {
//     console.log("Balance = " + pg2.balance);
//     console.log("Last Transction = " + pg2.lt);
// }


// pg1.deposit(100);    //this is called passing message to pg1
// pg1.statement();
// pg1.withdraw(50);
// pg1.statement();
// pg1.withdraw(10);
// pg1.statement();


// pg2.deposit(200);
// pg2.statement();
// pg2.withdraw(100);
// pg2.statement();
// pg2.withdraw(50);
// pg2.statement();








var pg1 = {
    balance: 0,
    lt: 0,
    deposit : deposit,
    withdraw : withdraw,
    statement : statement
};
var pg2 = pg1;
var pg3 = pg1;
function deposit(v)
{
    pg1.balance = pg1.balance + v;
    pg1.lt = v;
}
function withdraw(v)
{
    if (pg1.balance >= v)
    {
        pg1.balance = pg1.balance - v;
        pg1.lt = -v;
    }
}
function statement()
{
    console.log("Balance = " + pg1.balance);
    console.log("Last Transction = " + pg1.lt);
}

function deposit2(v)
{
    pg2.balance = pg2.balance + v;
    pg2.lt = v;
}
function withdraw2(v)
{
    if (pg2.balance >= v)
    {
        pg2.balance = pg2.balance - v;
        pg2.lt = -v;
    }
}
function statement2()
{
    console.log("Balance = " + pg2.balance);
    console.log("Last Transction = " + pg2.lt);
}

function deposit3(v)
{
    pg3.balance = pg3.balance + v;
    pg3.lt = v;
}
function withdraw3(v)
{
    if (pg3.balance >= v)
    {
        pg3.balance = pg3.balance - v;
        pg3.lt = -v;
    }
}
function statement3()
{
    console.log("Balance = " + pg3.balance);
    console.log("Last Transction = " + pg3.lt);
}



pg1.deposit(100);
pg1.statement();
pg1.withdraw(50);
pg1.statement();
pg1.withdraw(10);
pg1.statement();


pg2.deposit(200);
pg2.statement();
pg2.withdraw(100);
pg2.statement();
pg2.withdraw(50);
pg2.statement();


pg3.deposit(2000);
pg3.statement();
pg3.withdraw(1000);
pg3.statement();
pg3.withdraw(500);
pg3.statement();



