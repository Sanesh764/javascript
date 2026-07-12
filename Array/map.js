
let Array=[2,3,4,5,6,7];

// Array.map((arr,index)=>{
//     return console.log(arr,index);
// });
// //double array
// let result=Array.map((arr)=>{
//     return arr*2;
// });
// console.log(result);

//agar return nhi likhna hai to () ye wala bracket likho
// Array.map((arr)=>(console.log(arr*2)));

// Array.map((arr)=>console.log(arr));
// let result=Array.map(arr=>arr*2);
// console.log(result);
// console.log(typeof(result));


// let fruits=["mango","banana","apple","licchi"];

// let result=fruits.map((fruit,index)=>{
//     return index + " : " + fruit;
// })
// console.log(result);

let students=[
    {
        name:"sanesh",
        rollNo:12,
        marks:78,
        married:false,
    },
    {
        name:"rahul",
        rollNo:32,
        marks:70,
        married:true,
    },
    {
        name:"santosh",
        rollNo:14,
        marks:88,
        married:false,
    },
];
let student=students.map((student)=>{
    return student.name +":"+ student.rollNo;
});
console.log(student);
console.log(typeof(student));

