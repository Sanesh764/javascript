
let array=[1,2,3,4,5,6,98,7,8,9];

//Sirf pehla matching element milta hai. man lo 1 say bada sara elememt hai but yaha pr sirf next bada 
//element hi dega jo hai 2
let result=array.find((arr)=>{
    return arr>1;
})
console.log(result);

