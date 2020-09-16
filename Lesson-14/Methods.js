// class PiggyBank{
//     constructor(){
//       this.balance = 0;
//       this.lt = 0;
//     }
   
//     deposit(v){
//         if(v > 0){
//           this.balance += v;
//           this.lt = v;
//         }
//     }
   
//     withdraw(v){
//         if(v > 0 && v <= this.balance){
//           this.balance -= v;
//           this.lt = -v;
//         }
//     }
   
//     statement(){
//        console.log("Balance = " + this.balance);
//        console.log("Last Transaction = " + this.lt);
//     }
//    }
   
//    var pg1 = new PiggyBank();
//    pg1.deposit(100);
//    pg1.deposit(50);
//    pg1.statement();
//    pg1.withdraw(25);
//    pg1.statement();






   class PiggyBank{
    constructor(){
      this.balance = 0;
      this.lt = 0;
    }
   
    deposit(v){
        if(v > 0){
          this.balance += v;
          this.lt = v;
        }
    }
   
    withdraw(v){
        if(v > 0 && v <= this.balance){
          this.balance -= v;
          this.lt = -v;
        }
    }
   
    statement(){
       console.log("Balance = " + this.balance);
       console.log("Last Transaction = " + this.lt);
    }
   }
   
   var pg2 = new PiggyBank();
   pg2.deposit(1000);
   pg2.deposit(500);
   pg2.statement();
   pg2.withdraw(250);
   pg2.statement();