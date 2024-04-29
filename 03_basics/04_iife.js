// Immediately Invoked Function Expressions (IIFE)
   // these functions are executed immediately: these are used to remove polution from global scop variables.s

   //Named IIFE
   (function chai() {
     console.log(`DB CONNECTED`);
   })(); // HERE ; IS REQUIRED BECAUSE IIFE INVOKED BUT DOES NOT KNOW WHERE TO STOP.


   // Erow function IIFE (UNNAMED)

   (()=>{
    console.log("Hello this is errow function IIFE")
   })();

   // How to pass parameter in IIFE.

   ((name)=>{
    console.log(`Hello this is ${name}`)
   })(`chandan`);