const marvelHeros = ["Iron Man", "Thor", "Captain America", "Hulk", "Spider Man"];
const dcHeros = ["Super Man", "Bat Man", "flash"];

//push():
// marvelHeros.push(dcHeros); // it will modify original array and pushes any type of data inside arry as new element.
// console.log(marvelHeros);

//concat():
// const allHeros = marvelHeros.concat(dcHeros); // it will return a new array (without modifing original array) with combined value of both array.
// console.log(allHeros);

//spread // mostly used for adding multiple array

// const newArrOfAllHeros = [...marvelHeros, ...dcHeros]; // it will take copy of original array and create new array.
// console.log(newArrOfAllHeros);

//flat:
// const ArrInsideArr = [1,4,3,5,[8,7,9],"hello", ["marval","heros",["captain","hock eye"]],"mango"]; // if we have this kind of array

// const flatArry = ArrInsideArr.flat(4); // this will spread all array in one 
// console.log(flatArry);

//convert to array:
console.log(Array.from("ChandanPriyankaVishwakarma"));
console.log(Array.from({name:"priyanka"})); //intersting


let score1 = 299;
let score2 = 199;
let score3 = 200;

console.log(Array.of(score1,score2,score3));