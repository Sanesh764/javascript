
//Array ka ek portion copy karta hai.
//Original array change nahi hota.

const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
];
console.log(fruits);

const result=fruits.slice(1,3);//3 ko include nhi karega 
console.log(result);//'Banana', 'Mango'
