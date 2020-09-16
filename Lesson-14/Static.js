// class PiggyBank{
//     constructor(){
//       if(PiggyBank.count === undefined) PiggyBank.count = 0;
//       PiggyBank.count++;
//       this.balance = 0;
//       this.lt = 0;
//     }
   
//     deposit(v){
//         if(v > 0){
//           this.balance += v;
//           this.lt = v;
//         }
//     }
//      withdraw(v){
//         if(v > 0 && v <= this.balance){
//           this.balance -= v;
//           this.lt = -v;
//         }
//     }
   
//     statement(){
//        console.log("Balance = " + this.balance);
//        console.log("Last Transaction = " + this.lt);
//     }
   
//     static printObjectCount(){
//       console.log("This is a Static Method");
//       console.log("Object Count = " + PiggyBank.count);
//     }
   
//    }
   
//    var pg1 = new PiggyBank();
//    var pg2 = new PiggyBank();
//    var pg3 = new PiggyBank();
//    //var pg4 = new PiggyBank();
   
   
//    PiggyBank.printObjectCount();





var printNumTwo;
for (var i = 0; i < 3; i++) {
  console.log("i1: ",i);
 
  if(i == 2){
      console.log(i);
    console.log("i2: ",i);
    
 printNumTwo = function() {
        console.log(i);
      //console.log("i3: ",i);
      return i;
    };
}
}

console.log("ans: ",printNumTwo());