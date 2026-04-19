
//const tinderUser=new Object();//this is singletan object

const tinderUser={};//this is not singleton object

tinderUser.name="sanesh"
tinderUser.id="12heur4trh2"
tinderUser.isLoggedIn=false



// console.log(tinderUser);

const regularUser={
    Email:"sanesh@google.in",
    fullName:{
        userFullName:{
            firstname:"sanesh",
            lastname:"kumar"
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userFullName)
// console.log(regularUser.fullName.userFullName.lastname)

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

// const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2);

const obj3={...obj1,...obj2};//using spread method
// console.log(obj3);

const users=[
    {
        id:1,
        email:"sanesh@.in"
    },
    {
        id:2,
        email:"papu@.in"
    },
    {
        id:3,
        email:"susu@.in"
    }
];

console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));//data type is array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
console.log(tinderUser.hasOwnProperty('isLoggedOut'));//false

