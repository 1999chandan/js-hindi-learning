// for loop

// for (let i = 1; i <=10; i++) {
//     const element = i*2;
//     console.log(element);
// }

//nested for loop:
// for (let i = 0; i < 3; i++) {
//     console.log(`Outer loop ${i}`);
//     for (let j = 0; j < i; j++) {
//         console.log(`inner loop ${j}`);
        
//     }
    
// }

let marvelHeros = [
  "Iron-Man",
  "Captain-America",
  "Spider-Man",
  "Hulk",
  "Thor",
  "Black-widow",
  "Howk-eye",
  "Ant-Man",
  "Black-Panther",
  "Wonda",
  "Doctor strange",
  "Vision"
];

for (let i = 0; i < marvelHeros.length; i++) {
    const element = marvelHeros[i];
    console.table(`${i} = ${element}`);
    
}