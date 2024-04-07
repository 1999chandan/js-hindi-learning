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