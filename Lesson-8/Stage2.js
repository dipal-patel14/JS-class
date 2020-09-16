// function sum(a,b)   //parameter
// {
//   console.log("Entering function");
//   let sum = a + b;
//   console.log("The sum of a & b is --> " + sum);
//   console.log("Leaving function");
// }

// sum(5,5);



// function returnSum(first,second){
// var sum = first + second;
// return sum;
// }
// var firstNo = 60;
// var secondNo = 70;
// console.log(firstNo + "+" + secondNo + " = " + returnSum(firstNo,secondNo));





        var count = 0;
		function countVowels(name)
		{
			for (var i=0;i<name.length;i++)
			{
              if(name[i] == "a" || name[i] == "e" || name[i] == "i" || name[i] == "o" || name[i] == "u")
              count = count + 1;
			}
		console.log("Hello " + name + "!!! Your name has " + count + " vowels.");
		}
   	 	var myName = ("Dipal patel");
    	countVowels(myName);