const name = "chandan";
const hobby = "photography";

//Traditional(old) way of concatinating strings
concatinatedStringOne = "my name is " + name + " and my hobby is " + hobby;
//console.log(concatinatedStringOne);

//Mordern way "String interpolation"

concatinatedStringTwo = `My name is ${name} and my hobby is ${hobby}.`;
//console.log(concatinatedStringTwo);

//other type to declare string;

const gameName = new String("battle Grounds");

//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(7));
//console.log(gameName.indexOf("u"));
//console.log(gameName.length);
//console.log(gameName.);
const newString = gameName.substring(0, 5);
//console.log(newString);
const otherString = gameName.slice(0, 5); // here we can do the same as substring but here we can give negetive value as well.
const otherString2 = gameName.slice(-13,5);
// console.log(otherString2);

const spacedValue = "   dante   ";
// console.log(spacedValue);
// console.log(spacedValue.trim());
// console.log(spacedValue.trimStart());
// console.log(spacedValue.trimEnd());

const url = "https://chandan.com/chandan%40vishwakarma";

console.log(url.replace('%40', '-'));