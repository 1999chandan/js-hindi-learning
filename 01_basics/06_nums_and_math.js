const score = 499;
// console.log(score);

const balance = new Number(324);
// console.log(balance);

// console.log(balance.toFixed(2));

const otherNumber =478.47382;

// console.log(otherNumber.toPrecision(4));

const hundreds = 10000000;
// console.log(hundreds.toLocaleString()); // output 10,000,000 based on US standard
// console.log(hundreds.toLocaleString('en-IN')); // output 1,00,00,000 based on Indian standard.


//++++++++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5)); //output 5
// console.log(Math.round(5.6)); // output 6 
// console.log(Math.ceil(4.1)); // output 5
// console.log(Math.floor(5.9));// output 5
//  console.log(Math.min(4,6,3,6,2,1,9,-9));
// console.log(Math.max(4,6,3,6,2,1,9,-9));

// console.log(Math.random()); // it alwasy give value between 0 and 1;
// console.log((Math.random()*10)+1);
// console.log(Math.floor((Math.random()*10))+1);

const min = 1;
const max = 6;

const diceVal = Math.floor(Math.random()*(max-min +1)) +min;
console.log(diceVal);



