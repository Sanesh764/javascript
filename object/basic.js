
//singleton
//object literals

const mysym=Symbol("key1");

const jsUser={
    name:"sanesh",
    "full name" :"sanesh kumar singh",
    [mysym]:"mykey1",
    roll_No:12,
    age:18,
    location:"lakhisarai",
    email:"sanesh@gmail.com",
    isLoggedIn:false,
    LastLoginDays:["monday","saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"])
// console.log(jsUser[mysym]);//important

jsUser.email="sanesh123@gmail.com";
//Object.freeze(jsUser);//iske badh object ka koi bhi value change nhi hoga
jsUser.email="sanesh775@gmail.com";
console.log(jsUser.email)

jsUser.greeting=function(){
    console.log(("hello js userr"));
    
}
jsUser.greetingTwo=function(){
    console.log((`Hello js user ${this.name}`));
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

