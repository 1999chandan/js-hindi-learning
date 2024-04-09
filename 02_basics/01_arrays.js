// Array
const myAry = [1, 3, 4, "chandan", true, 9]

// console.log(myAry[2]); // we can access values of array from index value;

// const myHeros = ["Santosh Vishwakarma", "Iron Man", "captain america", "spider man"];

// const Arr2 = new Array(1,2,3,4,5);
// console.log(Arr2[1]);

//Array Methods;

// myAry.push(5); //:- add value at the end of array
// myAry.pop() //:- remove value from the end of array
// myAry.unshift(10); //:-it will add value to the zero index and other valus will shift to one index 
                   // 0th index vlaue will shift to index 1 and so on.
// myAry.shift()// it is similar to pop but it removes value from the 0th index;
// console.log(myAry);

// console.log(myAry.indexOf(4)); // it will give the index value of provided value;
// console.log(myAry.includes(19)); // it will check provided value is present in array or not. and give result in boolean;


// const newArr = myAry.join(); // it will convert array into string with coma saparated vlues;
// console.log(myAry);
// console.log(newArr);
// if we check type of both
// console.log(typeof myAry); //object;
// console.log(typeof newArr);// string;

// slice, splice // important for interview
   //slice:
    // console.log("original myAry ", myAry);

    // const myNArry = myAry.slice(1,3); // it will give any array from myAry including vlue of index 1 and excluding value of index 3

    // console.log("myNArry ", myNArry);
    // console.log("After slice myAry ", myAry); // and slice will not affect the original arry.

   //splice:
    
    console.log("original myAry ", myAry);

    const myNArry2 = myAry.splice(1,3); // It removes value value from index 1 to 3, from the original arry and store in new array.

    console.log("myNArry2 ", myNArry2); 
    console.log("After splice myAry ", myAry); // remaining items will remains on array, (splice will affects the original array);