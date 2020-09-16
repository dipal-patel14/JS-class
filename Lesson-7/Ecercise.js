var y = [200,300,600,600];       // Avg

var total = 0;

for(var i = 0; i<y.length;i+=1){  //i+=1 we are getting sequence value like 1,2,3,4,5
  
 // total = total + y[i];
   total += y[i];  //we get random value here like 200,300,400
}
console.log(total);

var avg =(total * 100)/400;
 console.log(avg);



 var y = [20,30,60,60];       // Mean

 var total = 0;
 
 for(var i = 0; i<y.length;i+=1){  
   
  // total = total + y[i];
    total += y[i];  
 }
 console.log(total);
 
 var mean = total/ y.length;
  console.log(mean);


function count(){
array = [2,4,5 ,7,6,8,7,2,5];    //sorted array - before frequency we need to sorted the array.
   

for(var j =0; j < array.length-1; j++){  // -1 means last value check nahi kare

  console.log(" value of j = " + j);

  if(array[j] > array[j + 1]){

    var temp = array[j];
    array[j] = array[j +1];
    array[j + 1] = temp;
    j = 1;

  }

}
 console.log(array);

// console.log(array.sort());  //only i line lakhva thi pan array sorted thai jase.

current = null;
count = 0;

for(var i = 0; i < array.length; i++){
 // console.log(" value of i = " + i);

  if(array[i] != current){

    if(count > 0){
        console.log(current + 'comes --> ' + count + 'times<br>');
    }
     current = array[i];
     count = 1;
  } else {
      count++;
  }
}

  if(count > 0){
     console.log(current + 'comes --> '+ count + 'times');
   }
  }
count();