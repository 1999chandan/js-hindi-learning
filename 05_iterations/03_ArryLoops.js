// Array specitic loops:
// for of loop:

// const arr = [1,3,5,53,5,2,7];

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello world this is javascript Array specific loops lecture";

// for (const greet of greetings) {

//     if(greet==" "){
//         continue;
//     }
//     console.log(greet);
// }

// maps
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('Aus', "Austreliya");

// console.log(map);

// for (const key of map) { // it will print the array of key and value
//     console.log(key);
// }

// for (const [key, value] of map) { // it will destructure array of key and value and we can use key and value saparately.
//     console.log(`key of map: ${key} $ value of map: ${value}`);
// }

// for of loop will not work for object

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for in loop:
// using in object: 

// const myObj = {
//     name: "chandan",
//     empId: 12345,
//     email: "chan@gmail.com",
//     location: "India"
// };

// for (const key in myObj) {
//     console.log(`${key} = ${myObj[key]} `);
// }

// using in array:

// const myArr1 = ["priyanka", "chandan", "santosh", "sushma", "vasu", "badal"];

// for (const key in myArr1) {
//     console.log(myArr1[key]);
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// foreach loop: it does not return any value

const coding = ["js", "java", "C++", "kotlin", "python"];

// foreach loop using a call back function 
  //errow function as call back:
// coding.forEach((item)=>{
// console.log(item);
// });
  
  // normal function as call back:

// coding.forEach(function (params) { //callback function don't need name
//     console.log(item);
// } );

 // defining a function other place and using reference in the forEach loop:

// function callBack(item) {
//     console.log(item);
// };

// coding.forEach(callBack);

// parameter we can use in callback function:

// coding.forEach((eachItem, index, completeArr)=>{
//     console.log(eachItem, index, completeArr);
// });

// one more scenario: 
// in case we have object inside array:

// const ArrayItemObj = [
//     {
//         name: "chandan",
//         age: 25
//     },
//     {
//         name: "vasu",
//         age: 23
//     },
//     {
//         name: "badal",
//         age: 22
//     }
// ];

// ArrayItemObj.forEach((itemObj)=>{
//     console.log(`name: ${itemObj.name} and age: ${itemObj.age}`);
// });