// //promise 1:

// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('async task is complete');
//         resolve();
//     }, 1000)
// });
// promiseOne.then(function(){
//     console.log('promise consumed');
// })

// //2

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log("async 2 resolved");
// });
// //3
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({userName: "chandan", email: "example@gmail.com"});
//     }, 1000);

// })

// promiseThree.then(function(user){
//     console.log(user);
// })

//4

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({userName: "chandan", passWord: "124"});
//         }
//         else{
//             reject('Error: Something went wrong')
//         }
//     }, 1000)
// });

// // const userName = promiseFour.then(function(user){
// //     console.log(user.userName);
// //     return user.userName;
// // });
// promiseFour.then(function(user){
//     //console.log(user.userName);
//     return user.userName;
// }).then((userName)=>{
//     console.log(userName);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log(`The promise either resolve or rejected`);
// })


//5

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({userName: "javaScript", password: "123"});
//         }
//         else{
//             reject("Error: JS went wrong")
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//     try {
//         const res = await promiseFive;
//     console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
    
// }

// consumePromiseFive();
//6
const url = "https://jsonplaceholder.typicode.com/users";
const url2 = "https://api.github.com/users/hiteshchoudhary";

// async function getAllUsers(URL){
//     try{const res = await fetch(URL);
//     const data = await res.json(); // it will take some time to convert to json hence we need to wait for it, so we will use "await" for this as well.
//     console.log(data);
// }catch(error){
//     console.log(error);
// }
// };

// getAllUsers(url);

//7

fetch(url2)
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(`Error: ${err}`);
})