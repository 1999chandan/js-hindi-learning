//primitive data type: (call by value)
//String, Number, Boolean, null, undefined, symbol, bigint


// is javascript staticaly typed or dynamically typed?
const score = 33; // here we are not defining the value type javascript automatically detects type 
const name = "chandan" // here it detects value is string user does not need to defined the type 



//Symbol:

const MyId = Symbol('573');
const MyOtherId = Symbol('573');
// both MyId and MyOtherId contains same value in symbol but let see whether these are equal or not?
//console.log(MyId === MyOtherId); // It will give you "false" result which means, though both symbol contains same value but they are not equal
                                 // "A Symbol will be unique "



//Non Primitive data type: (call by reference) or (reference type):
// Array, Objects, Functions

const firstObj = {
    name:"chandan",
    age: 24,
    role: "Web Devloper"
} // values inside {} are object stored in key value pair and type or value can by any type

//https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //Memory type:

// stack (Primitive), Heap (non primitive)

// example of "Stack memory":--
let oneName = "Star Light Photography"; // oneName value is assigned to a stack let say stack-1

let anotherName = oneName; // in another name we assigned value of onName so in this case anotherName does not 
                           // took the original value of oneName, It took copy of oneName value and saved in other stack let say stack-2
anotherName = "Vasu_v7"; // here when we are changing value of anotherName so it will change value of stack-2 not stack-1, so oneName will not change only anotherName value will change.

console.log(oneName); // output "Star Light Photography"
console.log(anotherName);  // output "Vasu_v7"

// Example of "Heap":--

let userOne = {
    email:"chandan@gmail.com",
    name: "chandan",
    age: 24
}; // value of userOne stored in Heap-1

let userTwo = userOne // in this case it will not create a copy and store in other memory location.
                      // here it will take value from original location that is "Heap-1".
//So if we change value of userTwo it will change value in "Heap-1" because of that it will change the value of userOne as well.

userTwo.email = "chan@gmail.com";

console.log(userOne.email); // output: "chan@gmail.com"
console.log(userTwo.email); // output: "chan@gmail.com"