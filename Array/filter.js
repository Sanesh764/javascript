
//filter condition ke base pr kam karta hai agar condition true then return kar dega new elelemt

// let array=[2,3,4,5,6,7,8,9,10];

// let result=array.filter((arr)=>{
//     return arr%2===0;
// });
// console.log(result);


const products=[
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "tablet",
        price: 20000
    },
    {
        name: "phone",
        price: 80000
    },
    {
        name: "headphone",
        price: 25000
    },
];
let result=products.filter((product)=>{
    return product.price <= 30000;
});
console.log(result);
console.log(typeof(result));

const students = [
    { name: "Rahul", marks: 90 },
    { name: "Aman", marks: 45 },
    { name: "Sanesh", marks: 80 },
    { name: "Ravi", marks: 35 }
];

let results=students.filter((student)=>{
    return student.marks>=45;
});
console.log(results);


