//basic function:
function addTwoNumber (firstNum, secondNum){ // when we writing function defination input value called parameters;
let result = firstNum + secondNum;
console.log(result);
return result;
}


//addTwoNumber(2,6); // when we are calling function input called arguments

// function userLoggedIn (userName ) {
//     if(!userName){
        
//         return console.log("please enter username")
//     }

//     return `${userName} is just loggedin.`;

// };

// const user1 = userLoggedIn();
// // console.log(user1);
// const user2 = userLoggedIn("chandan");
// console.log(user2);

//++++++++++++++++++++++++++++++++++++++++++++++++++++

function calculateCartPrice (...num){ // ... is called rest operator.(...num) will return an array.
    return num
};

// console.log(calculateCartPrice(200, 400, 120, 100));

function calculateCartPrice2 (val1, val2, ...num){ // sometime we write lkie this in this case witch value will add in side num array?
    return num
}

// console.log(calculateCartPrice2(200, 400, 120, 100));

// How to use object in function?

const userObj = {
    userName: "chandan",
    UserId: "k8646451",
}

function handleObject (anyObj){
    console.log(`${anyObj.userName} has logged in with user id: ${anyObj.UserId}`);
}

handleObject(userObj);


//How to use Arrays in function?

const myNewArray = [
    100,
    400,
    500,
    199
];

function handleArray(getArray){

    return getArray[1];
}

console.log(handleArray(myNewArray));