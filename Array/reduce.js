let array=[10,20,30,40];

// let result=array.reduce((acc,curr)=>{
//    return acc+curr;
// });
/* Simple Definition

reduce() array ke saare elements ko mila kar ek hi final value return karta hai.

Ye final value kuch bhi ho sakti hai:

Sum
Total Price
Average
Object
Array
Count
 */
// array.reduce((accumulator, currentValue) => {
//     return updatedAccumulator;
// }, initialValue);

let result=array.reduce((acc,curr)=>{
   return acc*curr;
},100);
console.log(array);
console.log(result);


const students = [
    { name: "Rahul", marks: 90 },
    { name: "Aman", marks: 45 },
    { name: "Sanesh", marks: 80 },
    { name: "Ravi", marks: 35 }
];
const results=students.reduce((total,curr)=>{
    return (total+curr.marks)/4;
},0);
console.log(results);

