const myNumbers=[1,2,3,4,5,6,7,8,9];


//using function
// const myTotal=myNumbers.reduce(function (acc,current){
//     return acc+current;
// },0);

//using arrow function
// const myTotal=myNumbers.reduce((acc,current)=>{
//     console.log(`acc: ${acc} and currval: ${current}`);   
//     return acc+current;
// },0);

// console.log(myTotal);

const shoppingcart =[
    {
        itemName:"javascript",
        price:1233
    },
    {
        itemName:"web dev",
        price:1245
    },
    {
        itemName:"dsa",
        price:2499
    },
    {
        itemName:"mobile dev course",
        price:7899
    },
]
const pricetopay= shoppingcart.reduce((acc,item)=>{
    return acc + item.price
},0);
console.log(pricetopay);

