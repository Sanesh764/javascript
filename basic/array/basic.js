
const array=[1,2,3,4,5,6,7,8,9,20];

const arr=["sanesh","santosh","papu","priya"]
const arr2=new Array(1,2,3,4,5,6,23,7,8,9,0,1,2,4,4);

// for(let x=0;x<array.length;x++){
//     console.log(array[x]);
    
// }

// //Array method

// arr2.push("papu madharchod");//last me array ka value add kar dega
// arr.pop();//last me say ek array delete kar dega
// arr.unshift(255);//array ke start me value change kar dega,but bekar hai bez sara index ko aage shift karna paregaa
// arr.shift();//start me sab array ka element deleet kar dega

// for(let x=0;x<arr2.length;x++){
//     console.log(arr2[x]);
// }

// console.log(arr.includes(9));
// console.log(arr.indexOf(3));

const myArray=[1,2,3,4,5,6,7,8,9,0,12,3,4,5,6,7,8];
//console.log(myArray);//[
//   1, 2, 3,  4, 5, 6, 7,
//   8, 9, 0, 12, 3, 4, 5,
//   6, 7, 8
// ]
const newArry=myArray.join();
//console.log(newArry);//1,2,3,4,5,6,7,8,9,0,12,3,4,5,6,7,8

//slice,splic

console.log("A ",myArray);
const myn1=myArray.slice(1,3);
console.log(myn1);

const myn2=myArray.splice(1,3)
console.log(myn2);
console.log("C",myArray);
//slice() creates a new array without changing the original, while splice() modifies the original array by adding, removing, or replacing elements.



