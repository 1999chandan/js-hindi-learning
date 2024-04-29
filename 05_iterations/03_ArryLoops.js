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