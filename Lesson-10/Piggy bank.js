// // Knowing Responsibility

// var balance = 0;       //Basic programme
// var lt = 0;

// //Doing Responsibility 

// function statement(){
// console.log(" This is my Statement function");
// console.log(" balance = " + balance);
// console.log(" lt = " + lt);

// }
 
// function deposite(amount){
//    console.log(" Welcome to our Deposit function ");
//     balance += amount;
//     lt = amount;
//     console.log(" You Deposited " + "£" + amount + " into your account. Thank you !!!");
// }


// function withdraw(money){
//     console.log(" This is my Withdraw function")
// if(balance>= money) {
//     balance -= money;
//     lt = -money;
//     console.log(" You have withdrawn " + "£" + money +" from your account. Have a lovely day");
// } else{
//    console.log(" Insufficient balance in your account");
//    console.log(" Current balance is = " + "£" + balance);
//    console.log(" You tried to withdraw = " + "£" + money);
// }
// }   

// statement();
// deposite(40);
// statement();
// deposite(30);
// statement();
// withdraw(500);
// statement();
// deposite(400);
// statement();



//insted of balance and lt we using currentbalance and previousbalance


// var currentbalance = 0;
// var previousbalance = 0;

// function statement(){

// console.log("currentbalance = " + currentbalance);
// console.log("previousbalance = " + previousbalance);

// }
 
// function deposite(amount){

    
//     previousbalance = currentbalance;
//     currentbalance = currentbalance + amount;
  
// }


// function withdraw(money){
// if(currentbalance>= money) {
//     previousbalance = currentbalance;
//     currentbalance = currentbalance - money;
// } else{
   
   
//     console.log("balance is not enough ");
// }
// }   

// statement();
// deposite(500);
// statement();
// deposite(-300);
// statement();
// withdraw(100);
// statement();


// var currentbalance = 0;  
//  var previousbalance = 0;  //using return statement with if else

// function statement()
// {
//     console.log("Balance = " + currentbalance);
//     if (currentbalance > previousbalance)
//     {
//         console.log("Last Transaction was deposit of Rs. " + (currentbalance - previousbalance));
//     }
//     else if (currentbalance < previousbalance)
//     {
//         console.log("Last Transaction was withdrawal of Rs. " + (currentbalance - previousbalance));
//     }
// }
// function deposit(amount)
// {
//     if (amount <= 0)
//     {
//         console.log("Deposit amount should be greater than 0");
//         return;   //if u don't write return statement still output will remain same.
//     }
//     previousbalance = currentbalance;
//     currentbalance += amount;
     
//     console.log("You deposited Rs." + amount);
// }
// function withdraw(amount)
// {
//     if (amount <= 0)
//      {
//         console.log("Withdraw amount should be greater than 0");
//        return;
//     }
//     else if (amount > currentbalance)
//     {
//         console.log("Insufficient balance");
//         console.log("Current balance is Rs." + currentbalance);
//         console.log("Tried to withdraw Rs." + amount);
//         return;
//     }

//     previousbalance = currentbalance;
//     currentbalance -= amount;
    
//     console.log("You have withdrawn Rs." + amount);
// }

// statement();
// deposit(500);
// statement();
// deposit(300);
// statement();
// withdraw(10);
// statement();



// what should i need to do when i am not able to use -amount statement in withdraw


// var currentbalance = 0;  
//  var previousbalance = 0;  //using return statement with if else

// function statement()
// {
//     console.log("Balance = " + currentbalance);
//     if (currentbalance > previousbalance)
//     {
//         console.log("Last Transaction was deposit of Rs. " + (currentbalance - previousbalance));
//     }
//     else if (currentbalance < previousbalance)
//     {
//         console.log("Last Transaction was withdrawal of Rs. " + (currentbalance - previousbalance));
//     }
// }
// function deposit(amount)
// {
//     if (amount <= 0)
//     {
//         console.log("Deposit amount should be greater than 0");
//         return;   //if u don't write return statement still output will remain same.
//     }
//     previousbalance = currentbalance;
//     currentbalance += amount;
     
//     console.log("You deposited Rs." + amount);
// }
// function withdraw(amount)
// {
//     if (amount <= 0)
//      {
//         console.log("Withdraw amount should be greater than 0");
//        return;
//     }
//     else if (amount > currentbalance)
//     {
//         console.log("Insufficient balance");
//         console.log("Current balance is Rs." + currentbalance);
//         console.log("Tried to withdraw Rs." + amount);
//         return;
//     }

//     previousbalance = currentbalance;
//     currentbalance -= amount;
    
//     console.log("You have withdrawn Rs." + amount);
// }

// statement();
// deposit(500);
// statement();
// deposit(300);
// statement();
// withdraw(10);
// statement();




var balance = 0;       //Basic programme
var lt =0;
var strtransaction = "";
//Doing Responsibility 

function statement(){
console.log(" This is my Statement function");
console.log(" balance = " + balance);
console.log(" lt = "+ strtransaction + " " + lt);

}
 
function deposite(amount){
   console.log(" Welcome to our Deposit function ");
    balance += amount;
    lt = amount;
    strtransaction = "deposite";
    console.log(" You Deposited " + "£" + amount + " into your account. Thank you !!!");
}


function withdraw(money){
    console.log(" This is my Withdraw function")
if(balance>= money) {
    balance -= money;
    lt = -money;
    strtransaction = "withdraw";
    console.log(" You have withdrawn " + "£" + money +" from your account. Have a lovely day");
} else{
   console.log(" Insufficient balance in your account");
   console.log(" Current balance is = " + "£" + balance);
   console.log(" You tried to withdraw = " + "£" + money);
}
}   

statement();
deposite(40);
statement();
deposite(30);
statement();
withdraw(10);
statement();
deposite(400);
statement();


// Ans=1)   you can write lt = money+"withdraw";