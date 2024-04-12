//2. // singleton:

const tinderUser = new Object();

tinderUser.id = "k3829";
tinderUser.name = "sam bahadur";
tinderUser.email = "sam.bahadur@gmail.com";

// console.log(tinderUser);

const regularUser = new Object();
//object inside object:
regularUser.email = "vasu.vish@gmail.com";
regularUser.fullName = {
    firstName: "vasu",
    lastName: "vish"
};

// combining 2 boject:
//1
const objCombined = Object.assign({}, tinderUser, regularUser);
// console.log(objCombined);
//2 spread
const objCobined2 = { ...regularUser, ...tinderUser};
//console.log(objCobined2);

//
//console.log(tinderUser); 
//console.log(Object.keys(tinderUser)); // it will return an array of keys
// console.log(Object.values(tinderUser)); // it will return an array of values
// console.log(Object.entries(tinderUser)); // it will convert each key value pare into any array.

// console.log(tinderUser.hasOwnProperty("email"));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// object destructure:
const course = {
    courseName: "js hindi",
    courseFee: "999",
    courseInstructor: "hitesh"
}

const {courseName, courseFee, courseInstructor: instructor} = course; //destructuring course object.

console.log(instructor);
console.log(courseName);