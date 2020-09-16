class PiggyBank{
    constructor(){
      this._balance = 0;
      this._lt = 0;
    }
   
    get balance(){
       return this._balance;
    }
   
    set balance(val)
    {
      if(val >= 0)
      {
          this._balance = val;
          this._lt = val;
      }
    }
   
    deposit(v){
        if(v > 0){
          this._balance += v;
          this._lt = v;
        }
    }
   
    withdraw(v){
        if(v > 0 && v <= this._balance){
          this._balance -= v;
          this._lt = -v;
        }
    }
   
    statement(){
       console.log("Balance = " + this._balance);
       console.log("Last Transaction = " + this._lt);
    }
   
   
   }
   
   var pg1 = new PiggyBank();
   pg1.balance = 5000;  //when you write pg1.balance is same like pg1.deposite it's called as function 
   console.log("Property Balance = " + pg1.balance);
   //pg1.deposit(200);
   pg1.statement();
   pg1.withdraw(25);
   pg1.statement();