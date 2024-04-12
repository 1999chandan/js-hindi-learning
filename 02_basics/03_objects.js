

// Way of declaring objects
//1. object literals:

const mySymb = Symbol("key1"); 
const jsUser = {
    name : "chandan",
    age : 18,
    [mySymb]: "mykey1",// if you want to use symbol as key in side object you shuld decalare like this
    email : "chandan@google.com"
};

// console.log(jsUser.email); //one way of accessing value from object
// console.log(jsUser["email"]); //other way of accessing value from object.
//console.log(jsUser[mySymb]); // this is the correct syntex of accessing Symbol vlue ***important**
//vlue modification in object:

// jsUser.age = 24;

// console.log(jsUser);
// // If you want to lock vlue of object:
// Object.freeze(jsUser); // this will block the user to update value of object 

jsUser.email = "chandan@facebook.com" // after freezing i am trying to update it will not give any error but it will not update value of object after freez.

// adding new key pare value in object:

jsUser.hloWord = "hello world!!!"

//console.log(jsUser);

// we can also add function to the object:

jsUser.greeting = function(){
    console.log("Hello JS user");
};

jsUser.greeting();

