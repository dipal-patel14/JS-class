// function Loop(e){

//     const msg = e.data[0];
  
//     const times = e.data[1];
  
//     for(var i = 0; i < times; i++){
  
//       console.log("Message is : " + msg);
  
//     }
  
//     postMessage("Done");
  
//   }
  
  
  
//   onmessage = Loop;


// stage 2

// function Loop(e){

//     const msg = e.data[0];
  
//     const times = e.data[1];
  
//     for(var i = 0; i < times; i++){
  
//       console.log("Message is : " + msg);
  
//     }
  
//     postMessage("Done");
  
//   }
  
  
  
//   onmessage = Loop;


// stage 3

// function Loop(e){

//     const msg = e.data[0];
  
//     const times = e.data[1];
  
//     var output = "";
  
//     for(var i = 0; i < times; i++){
  
//       output += "<h3>" + msg + "</h3>"
  
//     }
  
//     postMessage(output);
  
//   }
  
  
  
//   onmessage = Loop;


// stage 4


function Decide(e){

    exec = e.data;
  
    switch (exec) {
  
      case "f1": f1();
  
                 break;
  
      case "f2": f2();
  
                 break;
  
      default: console.log("No Such Command")
  
    }
  
    postMessage("Done");
  
  }
  
  
  
  function f1(){
  
    console.log("Hello World this is F1")
  
  }
  
  
  
  function f2(){
  
    console.log("Hello World this is F2")
  
  }
  
  
  
  onmessage = Decide;