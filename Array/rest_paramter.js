
function sum(...numbers){
    let totalSum=0;
    for(let num of numbers){
        totalSum += num;
    }
    return totalSum;
};
console.log(sum(10,20));
console.log(sum(10,20,80,90));
console.log(sum(10,20,45,87,1,2,3,4,5,89,6,78));

function multiply(multiplyer,...numbers){
    return numbers.map(numbers=>numbers*multiplyer);
}
console.log(multiply(2,1,2,3,4));



function AddToCart(user,...items){
    console.log(`${user} added:`);
    console.log(items);      
}
AddToCart(
    "sanesh",
    "laptop",
    "mouse",
    "keyboard",
    "headphones"
);



