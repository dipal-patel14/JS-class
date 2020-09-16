
var pg ={          //classless object - prototype object
    balance : 0,
    lt : 0
};


function deposit(v)      //deposite is very tighty club with pg object
{
    if(v > 0)
    {
        pg.balance += v;
        pg.lt = v;
    }
}

function withdraw(v)  //withraw is hard wire with pg object
{
    if(v > 0 && v <= pg.balance)
    {
        pg.balance -= v;
        pg.lt = -v;
    }
}

function statement()
{
    console.log("Balance: " + pg.balance);
    console.log("Last Transaction: " + pg.lt);
}

deposit(100);
statement();
withdraw(50);
statement();