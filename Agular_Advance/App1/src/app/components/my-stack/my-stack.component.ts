// import { Component, OnInit } from '@angular/core';



// @Component({

//   selector: 'app-my-stack',

//   templateUrl: './my-stack.component.html',

//   styleUrls: ['./my-stack.component.css']

// })

// export class MyStackComponent implements OnInit {



//   data = "My Stack Data";

//   textFieldInput = "";

//   constructor() { }



//   pushHandler()

//   {

//       this.data +=  "\n" + this.textFieldInput;

//       this.textFieldInput = "";

//   }



//   ngOnInit() { }



// }


import { Component, OnInit } from '@angular/core';
import { MyStackImplementationService } from 'src/app/services/my-stack-implementation/mystackimplementation.service';

//import { MyStackImplementationService } from '../../Services/MyStackImplementation/my-stack-implementation.service';



@Component({

  selector: 'app-my-stack',

  templateUrl: './my-stack.component.html',

  styleUrls: ['./my-stack.component.css'],

  providers: [MyStackImplementationService]

})

export class MyStackComponent implements OnInit {



  stack: MyStackImplementationService;

  data = "";

  constructor(s: MyStackImplementationService)

  {

    console.log("Constructor of MyStack Called");

    this.stack = s

  }



  pushHandler()

  {

      console.log("Push Handler Called!");

      var t  = (<HTMLInputElement>document.getElementById("val"));

      var string = t.value;

      t.value = "";

      this.stack.push(parseInt(string));

      this.stack.print();

  }



  popHandler()

  {

      console.log("Pop Handler Called!");

      this.stack.pop();

      this.stack.print();

  }



  ngOnInit() { }



}