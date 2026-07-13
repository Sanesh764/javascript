

const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
];

console.log(fruits);

//delete the element 
// const result=fruits.splice(1,2);//ye hamisa delete hua element return karta hai
// console.log(result);

// console.log(fruits);


//insert element
//fruits.splice(1,0,"licchi");//first index pr jao 0 element delete karo licchi add kar do index 1 pr
//console.log(fruits);

//replace element
fruits.splice(1,1,"tamatar");//index 1 pr jao 1 element delete karo or uske jagah pr new element add karo tamatar
console.log(fruits);

fruits.splice(1,0,"licchi","pumkin","sushi");
//multiple value we can insert
console.log(fruits);







