// function deposit(v)             //js create object itself it's called constructor using new keyword

// {

//     this.balance = this.balance + v;

//     this.lt = v;

// }



// function withdraw(v)

// {

//     if (this.balance >= v)

//     {

//         this.balance = this.balance - v;

//         this.lt = -v;

//     }

// }



// function statement()

// {

//     console.log("Balance = " + this.balance);

//     console.log("Last Transction = " + this.lt);

// }



// function PiggyBank()

// {
//     this.balance = 0;

//     this.lt = 0;
   
//     this.deposit = deposit;

//     this.withdraw = withdraw;

//     this.statement = statement;

// }

// var pg1 = new PiggyBank();  //js create object itself it's called constructor using new keyword



// pg1.deposit(100);

// pg1.statement();

// pg1.withdraw(50);

// pg1.statement();

// pg1.withdraw(10);

// pg1.statement();



// var pg2 = new PiggyBank();



// pg2.deposit(200);

// pg2.statement();

// pg2.withdraw(100);

// pg2.statement();

// pg2.withdraw(50);

// pg2.statement();





// var pg3 = new PiggyBank();



// pg3.deposit(300);

// pg3.statement();

// pg3.withdraw(200);

// pg3.statement();

// pg3.withdraw(100);

// pg3.statement();



function deposit(v)             //js create object itself it's called constructor using new keyword

{

    this.balance = this.balance + v;

    this.lt = v;

}



function withdraw(v)

{

    if (this.balance >= v)

    {

        this.balance = this.balance - v;

        this.lt = -v;

    }

}



function statement()

{

    console.log("Balance = " + this.balance);

    console.log("Last Transction = " + this.lt);

}
 var base = {

    deposit :deposit,

    withdraw : withdraw,

    statement : statement,

 };


function PiggyBank()

{
    this.balance = 0;

    this.lt = 0;
   
    this.__proto__ = base
}





var pg1 = new PiggyBank();  //js create object itself it's called constructor using new keyword



pg1.deposit(100);

pg1.statement();

pg1.withdraw(50);

pg1.statement();

pg1.withdraw(10);

pg1.statement();



var pg2 = new PiggyBank();



pg2.deposit(200);

pg2.statement();

pg2.withdraw(100);

pg2.statement();

pg2.withdraw(50);

pg2.statement();





var pg3 = new PiggyBank();



pg3.deposit(300);

pg3.statement();

pg3.withdraw(200);

pg3.statement();

pg3.withdraw(100);

pg3.statement();