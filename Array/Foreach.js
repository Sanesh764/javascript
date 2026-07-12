//Array ka muitable means agar chnage kuch hoga to wahi array me chnage hoga not new array banega


// let arr=[1,2,3,4,5];
// console.log(arr);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// //for each does't return anything
// const result=arr.forEach((arr,index,Arr)=>{
//     console.log(index,"at",2*arr,Arr);  
// })
// console.log(result);//give ans undefinde bez it return nothing

let array=[
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
array.push({name:"archana",rollNo:78,marks:99,married:true});
console.log(array);

array.forEach((arr)=>{
    console.log(arr.name);
    
})

