
const coding=["js","ruby","java","python","c++","cpp"];

//for each koi bhi value return na karta hai
// const result=coding.forEach((item)=>{
//     console.log(item);
// })
// console.log(result);


const num=[1,2,12,3,4,,5,6,7,8,9,10];
// let num2=num.filter((num)=>{ //{} ye lagane ke badh return karna jaruri h other []empty aayega
//     return num>4;
// })

let num2=num.filter((num)=>num>4);//isme {} ye na hai to return ka need ka h
//console.log(num2);


//method 2 using foreach loop
// const nnewNums=[];

// num.forEach((item)=>{
//     if(item>4){
//         nnewNums.push(item);
//     }
// })
// console.log(nnewNums);

