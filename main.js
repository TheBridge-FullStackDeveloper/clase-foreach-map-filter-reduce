// function sum(a, b) {
//   return a + b;
// }

// const sum = (a, b) => {
//   return a + b;
// };
// sum()
// const sum = (a, b) =>  a + b;

// const saludar = nombre => 'Mi nombre es '+ nombre

// console.log(saludar('Miguel'));

// function test2() {
//   console.log("Función test2 ejecutada.");
// }

// function test1(callback) {
//   callback(); // función test2
// }

// test1(test2);
const fruits = ["manzana", "banana", "peras", "fresas"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (const fruit of fruits) {
//   if (fruit.length <= 6) {
//     console.log(fruit);
//   }
// }

// fruits.forEach((fruit) => {
//   if (fruit.length <= 6) {
//     console.log(fruit);
//   }
// });

// fruits.forEach(fruit => console.log(fruit))

const canciones = ["Hang onto yourself", "Go your own way", "Modern Love"];

canciones.forEach((cancion, indice, array) => {
  console.log("Elemento actual", cancion, "índice", indice, "array", array);
});

const myArray = [1, 2, 3, 4];

// const myArrayTimesTwo = myArray.map((value)=>{
//     return value * 2
// })

const myArrayTimesTwo = myArray.map((value) => value * 2);

// const myArrayTimesTwo =[]

// for (const number of myArray) {
//     myArrayTimesTwo.push(number*2)
// }

// console.log(myArrayTimesTwo);

const songs = [
  { name: "Curl of the Burl", artist: "Mastodon" },
  { name: "Oblivion", artist: "Mastodon" },
  { name: "Flying Whales", artist: "Gojira" },
  { name: "Euralio y sus cabras", artist: "Euralio" },
];

// const allSongNames = [];

// for (const song of songs) {
//   allSongNames.push(song.name);
// }

// const allSongNames = songs.map(song => song.name)
// console.log(allSongNames)

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let numerosFiltrados = numeros.filter(numero => numero < 5)

// let numerosFiltrados = numeros.filter(function(numero) {
//     return numero > 5
// })

// let numerosFiltrados = []

// for (const numero of numeros) {
//     if(numero > 5){
//         numerosFiltrados.push(numero)
//     }
// }

console.log(numerosFiltrados)

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];


// let result =[]
// for (const word of words) {
//     if(word.length > 6){
//         result.push(word)
//     }
// }

const result = words.filter(word => word.length > 6)
console.log(result)


const numbers = [10, 5, 7];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {   
//     sum += numbers[i];
// }


const sum = numbers.reduce((a,b)=> a + b)
// const sum = numbers.reduce((valor anterior,valor actual)=> a + b,valor inicial)




