
const marvel_heroes=["thor","ironman","spiderman"];
const dc_heroes=["superman","flash","bathman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'bathman' ] ]  dc_heroes ko array ke roop me push kiya

// let allheroes=marvel_heroes.concat(dc_heroes)
// //concat not modify original array it return new array
// console.log(allheroes);


//using sprade 

const All_new_heros=[...marvel_heroes,...dc_heroes];
console.log(All_new_heros);

const another_array=[1,2,3,[4,,5,6],7,[6,7],[4,5,[9,9,8,1]]];
const usable_array=another_array.flat(Infinity);
console.log(usable_array)


console.log(Array.isArray(["superman"])); // true
console.log(Array.isArray([]));           // true
console.log(Array.isArray([1,2,3]));      // true

console.log(Array.isArray("superman"));//cheak karega agar isah array exist karta hai to true otherwise false

console.log(Array.from("sanesh"));//agar exist nhi karega to new bana dega array

console.log(Array.from({name:"sanesh"}));//return empty []

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//varible ko array me conversion

