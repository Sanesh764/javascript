
const user={
    username:"samesh",
    price:999,
    welcomeMessage:function (){
    console.log(`${this.username} , welcome to website`);
    
    }
}
// user.welcomeMessage()
// user.username="rahul"
// user.welcomeMessage()

//console.log(this);//empty [] agar yahi code prouser me run karega to window object dekhaye dega

// function chai(){
//     let username="sanesh"
//     console.log(this.username);//undefined
    
// }
// chai()


//arrow function
// const chai = ()=>{
//     let username="sanesh"
//     console.log(this.username);//also give undefined
// }
// chai()





//+++++++++++++++++++++Arrow function+++++++++++++++++

//expliciate return return lagana parta hai
// const addtwo=(num1,num2)=>{
//     return num1+num2;
// }

//impliciate return me retun ka need nhi hota h
// const addtwo=(num1,num2)=>num1+num2;


//{} ye add kiya to return jaruri hai but () ye likha to return jaruri na h
// const addtwo=(num1,num2)=>(num1+num2);

const addtwo=(num1,num2)=>({username:"sanesh",rollNo:12})
console.log(addtwo(1,2));

