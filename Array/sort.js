
const fruits=["Orange","Apple","Banana","mango"];
console.log(fruits);

fruits.sort();
console.log(fruits);

const numbers = [100,5,25,1];
console.log(numbers);

numbers.sort();//ye work nhi karega bez ye string ke tarah number ko condsider karta hai
console.log(numbers);


//sort in assending order
numbers.sort((a,b)=>{
   return a-b;
});
console.log(numbers);

//sort in Descending order
numbers.sort((a,b)=>{
    return b-a;
});
console.log(numbers);

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
products.sort((a,b)=>{
    return a.price-b.price;
});
console.log(products);

