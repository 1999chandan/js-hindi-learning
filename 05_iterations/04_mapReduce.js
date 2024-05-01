const myNums = [1,2,3,4,5,6,7,8,9,10];
// filter is returning new array based on the condition
// const newMyNum = myNums.filter( (num)=>{
//      if(num>4){
//         return num;
//      }
// });
// console.log(myNums);
// console.log(newMyNum);

//+++++++++++++++++++++++++++++++++++

// map:

// const nuwNum= myNums.map((num)=>{
//     return num+2;
// })
// console.log(myNums);
// console.log(nuwNum);

// chaining: we can use multiple methods one by one:
// example:

// const newNumber = myNums
//                     .map((num)=> num +3)
//                     .filter((num)=> num<6)
//                     .concat(myNums);

// console.log(newNumber);

//IMPORTANT: REDUCE:

// const arr1 = [1,2,3];
// const initialVal = 4;
// const newArr1= arr1.reduce((acc, currVal)=>{
//     console.log(`acc: ${acc}, currVal: ${currVal}`);
//     return acc + currVal
// }, initialVal);

// console.log(newArr1);

