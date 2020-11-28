// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MystackimplementationService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';



@Injectable()

export class MyStackImplementationService {



  stk : number[];

  sp: number;



  constructor()

  {

    console.log("Constructor of My Stack Implemetation");

    this.stk = new Array(10);

    this.sp = 10

  }



  push(v:number)

  {

    console.log("Push Called!");

    if(this.sp == 0)

    {

      console.log("Stack Overflow");

    }

    else

    {

      this.stk[--this.sp] = v;

    }

  }



  pop()

  {

    console.log("Pop Called!");

    if(this.sp == 10)

    {

      console.log("Stack Underflow");

    }

    else

    {

      this.stk[this.sp] = 0;

      return this.stk[this.sp++];

    }
      return -1;
  }



  print()

  {

      for(var i in this.stk) console.log(this.stk[i])

  }



}