// function Das() {
//      for(let i =0; i<4; i++){    //let no scope within block suthi no chai
//          console.log(i);
//      }
//      console.log(" outside the world" + i);   //var no scope nearest block suthi no chai
// }
// Das();



// Data types

// let myNum : number;  //thi is the way we can declare over data types
// console.log(10);


// let myStr : string;  //thi is the way we can declare over data types
// myStr = "Das";

// let myAny : any;
// myAny = false;
// console.log(myAny);


// Type Assertion

// let das;
// das = "jai swaminarayan";

// (<string>das).length; // 1 way to write

// (das as string).length;  //2 way to write


// Interfaces

// interface NamePro {     // interface make code more simpify way
//     firstname : String,  // every parameter na data type mention karvana jethi error na aave.
//     lastname : Number,
// }


// let namets = (Object : NamePro) => {   // parameter individual pass karva karta ek object banavi deva no ane eni saathe interface ne assign kari nakhvanu.
//     console.log(Object.firstname+ "" + Object.lastname);
// }
// namets({            //function call karti vakhte {} ni ander name value pair lakhvani

// firstname : "Dipal",
// lastname:55,
// });



// Class and Object


// class Swamiji{
//     firstname: String;       // called Field not properties
//     lastname : String;
//     age :Number;

   

//     getFirstname(){       //method bcz class ni ander chai 
//         console.log("My swamiji's name is" + this.firstname);  //this pointer firstname na field ne point kare chai
//     }

//     getLastname(){

//     }
// }

// let hari  = new Swamiji();
// hari.firstname = "hariswami";   //value assign karu chai
// hari.getFirstname();           //method call kari chai.



// Constructor




// class Swamiji {
//     firstname: String;       // called Field not properties
//     lastname : String;
//     age :Number;

//     constructor(firstname: String, lastname : String, age?:Number){
//         this.firstname = firstname;  //this.firstname chai te field ne point kare chai and only firstname constructor na parameter ne point kare chai.
//         this.lastname = lastname;
//         this.age = age;

//     }


//     getFirstname(){       //method bcz class ni ander chai 
//         console.log("My swamiji's name is" + this.firstname + "" + this.lastname+ "" + this.age);  //this pointer firstname na field ne point kare chai
//     }

//     getLastname(){

//     }
// }

// let hari  = new Swamiji("dipal","patel");  //jo only 2 para j pass karvana hoi to age ?: String chai constructor ma tya ? mukvano
// let hari2  = new Swamiji("dipal1","patel1",1);

// hari.getFirstname();
// hari2.getFirstname();            //method call kari chai.



// Access Modifier   1 way write


// class Swamiji {
//    private firstname: String;       // called Field not properties
//    private lastname : String;
//    private age :Number;

//     constructor(firstname: String, lastname : String, age?:Number){
//         this.firstname = firstname;  //this.firstname chai te field ne point kare chai and only firstname constructor na parameter ne point kare chai.
//         this.lastname = lastname;
//         this.age = age;

//     }


//     getFirstname(){       //method bcz class ni ander chai 
//         console.log("My swamiji's name is" + this.firstname + "" + this.lastname+ "" + this.age);  //this pointer firstname na field ne point kare chai
//     }

//     getLastname(){

//     }
// }

// let hari  = new Swamiji("dipal","patel");  //jo only 2 para j pass karvana hoi to age ?: String chai constructor ma tya ? mukvano
// let hari2  = new Swamiji("dipal1","patel1",1);


// hari.getFirstname();
// hari2.getFirstname();            //method call kari chai.


// Access Modifier 2 way write called prefix modifier



class Swamiji {
   
     constructor(private firstname: String, public lastname : String, private age:Number){
        
 
     }
 
 
     getFirstname(){       //method bcz class ni ander chai 
         console.log("My swamiji's name is" + this.firstname + "" + this.lastname+ "" + this.age);  //this pointer firstname na field ne point kare chai
     }
 
     getLastname(){
 
     }
 }
 
 let hari  = new Swamiji("dipalk","ppppatel",30);  //jo only 2 para j pass karvana hoi to age ?: String chai constructor ma tya ? mukvano
//  let hari2  = new Swamiji("dipal1","patel1",1);
 
 
 hari.getFirstname();
//  hari2.getFirstname();            //method call kari chai.
