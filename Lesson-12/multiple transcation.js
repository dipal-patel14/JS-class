function deposit(v)
{
    if(v > 0)
    {
        this.balance += v;
        this.transactions.push(v);
    }
}

function withdraw(v)
{
    if(v > 0 && v <= this.balance)
    {
        this.balance -= v;
        this.transactions.push(-v); 
    }
}

function statement()
{
    console.log("Balance: " + this.balance);
    for(let i of this.transactions)
    {
        console.log("Transaction: " + i);
    } 
}

let pg1 = {
    balance:0,
    transactions:[],
    deposit:deposit,
    withdraw:withdraw,
    statement:statement,
};

pg1.deposit(100);
pg1.deposit(30);
pg1.deposit(40);
pg1.statement();

pg1.withdraw(35);
pg1.withdraw(10);
pg1.statement();