// var amit = {

//     a : 10,

//     b : 20,

//     marks : [ 11,22,33]

// };



// console.log(amit);

// console.log(amit.a);

// console.log(amit.b);

// console.log(amit.marks[1]);



// var moti = {

//     m : 30,

//     n : 40,

//     marks : [6,7,8]

// };



// console.log(moti);

// console.log(moti.m);

// console.log(moti.n);

// console.log(moti.marks[2]);



// var raju = {

//     i : 50,

//     j : 60,

//     marks : [1,2,3]

// };



// console.log(raju);

// console.log(raju.i);

// console.log(raju.j);

// console.log(raju.marks[0]);


// amit.dost = moti;

// moti.friend = raju;

// raju.mitra = amit;



// // console.log(amit);

// // console.log(amit.dost);

// // console.log(amit.dost.m);

// // console.log(amit.dost.n);

// // console.log(moti);

// // console.log(moti.friend);

// // console.log(raju);

// // console.log(raju.mitra);

// // console.log(amit.dost.friend.i);

// // console.log(amit.dost.friend.mitra.a);

// // console.log(raju.mitra.dost.m);
// // console.log(moti.m);
// // console.log(amit.dost.m);
// // console.log(moti.friend.mitra.dost.m);

// console.log(raju.mitra.dost.friend.marks[0]);
// console.log(moti.friend.marks[1]);
// console.log(amit.dost.marks[2]);
// console.log(moti.friend.mitra.dost.marks[2]);
// console.log(raju.mitra.marks[0]);








// var amit = {

//     a : 10,

//     b : 20,

//     marks : [ 11,22,33]

// };



// console.log(amit);

// console.log(amit.a);

// console.log(amit.b);

// console.log(amit.marks[1]);



// var moti = {

//     m : 30,

//     n : 40,

//     marks : [6,7,8]

// };



// console.log(moti);

// console.log(moti.m);

// console.log(moti.n);

// console.log(moti.marks[2]);



// var raju = {

//     i : 50,

//     j : 60,

//     marks : [1,2,3]

// };



// console.log(raju);

// console.log(raju.i);

// console.log(raju.j);

// console.log(raju.marks[0]);

// var tommy = {

//     x : 70,

//     y : 80,

//     //marks : [55,66,77]
//     marks : { z :100}
// };

// console.log(tommy);

// console.log(tommy.x);

// console.log(tommy.marks[0]);


// amit.dost = moti;

// moti.friend = raju;

// raju.mitra = tommy;

// tommy.sakha = amit;


// console.log(amit.dost.friend.mitra.marks[1]);
// console.log(moti.friend.mitra.x);
// console.log(tommy.marks.z);

// // console.log(amit);

// console.log(amit.dost);

// console.log(amit.dost.m);

// console.log(amit.dost.n);

// console.log(moti);

// console.log(moti.friend);

// console.log(raju);

// console.log(raju.mitra);

// console.log(amit.dost.friend.i);

// console.log(amit.dost.friend.mitra.a);

// console.log(raju.mitra.dost.m);
// console.log(moti.m);
// console.log(amit.dost.m);
// console.log(moti.friend.mitra.dost.m);

// console.log(raju.mitra.dost.friend.marks[0]);
// console.log(moti.friend.marks[1]);
// console.log(amit.dost.marks[2]);
// console.log(moti.friend.mitra.dost.marks[2]);
// console.log(raju.mitra.marks[0]);







var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
var counted = [], count = [];
var i = 0, j = 0, k = 0;
while (k < arr.length) {
    if (counted.indexOf(arr[k]) < 0) {
        counted[i] = arr[k];
        count[i] = 0;
        for (j = 0; j < arr.length; j++) {
            if (counted[i] == arr[j]) {
                count[i]++;
            }
        }
        i++;
    } else {
        k++;
    }
}