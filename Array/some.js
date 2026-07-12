let numbers=[2,3,4,5,6,7,8,10];

//ye hamisa true or false me ans deta hai
// let result=numbers.some((num)=>{
//     return num >= 8;
// })
// console.log(result);

const users = [
    "Rahul",
    "Aman",
    "Sanesh"
];
const exists=users.some((user)=>{
    return user=="Sanesh";
})
console.log(exists);
