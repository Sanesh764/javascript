
//iska use hm tb karte h jab hmko pata nhi hota hai user say input kitna aayega
// function calculatecartPrice(...num1){//rest operator isko spread operator bhi bolte h
//     return num1;
// }

function calculatecartPrice(val1,val2,...num1){
    return num1;
}
//console.log(calculatecartPrice(12,234,76,8452,34));//ye array return karta h

const user={
    username:"sanesh",
    price:100
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleobject(user);

handleobject({
    username:"sanu",
    price:22344
})

const arr=[200,400,600,500];
function returnValue(array){
    return array[1];
}
// console.log(returnValue(arr))
console.log(returnValue([20,34,76,89,0]));
