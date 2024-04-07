let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.getDate());
// console.log(myDate.getFullYear());
//console.log(myDate.getTimezoneOffset());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());

// let myCreatedDate = new Date(2024,2,21, 6,30,16,0);
// console.log(myCreatedDate.toLocaleString());

let myOtherCreatedDate = new Date("04-14-2024");
console.log(myOtherCreatedDate.toDateString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp); // it will give the value in miliseconds.
console.log(Math.floor(Date.now()/1000)); // convert milisecond into second
