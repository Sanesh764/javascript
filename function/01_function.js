
function hello (){
    console.log(`hello sanesh`);
}
function print1To100(){
    for(let i=0;i<4;i++){
        console.log(i);
    }
}

// function addTwoNumber(num1,num2){//yaha jo value aata hai usko parameter bolte hai
//     if(typeof num1===typeof num2){
//         console.log(num1+num2);
        
//     } else{
//         console.log("con't we add these tow number");
        
//     }
    
// }

// function addTwoNumber(num1,num2){
//     let result=num1+num2;
//     return result;
// }

function isLoggedIn(username="sanesh"){
    if(username===undefined){
        console.log("please enter username");
    }
    return `${username} just loggedIn`;
}

// hello();
// print1To100();
//const result=addTwoNumber(5,23);//yaha jo pass hota hai usko argument bolte h
//console.log(`result :${result}`);//output is undefine

console.log(isLoggedIn());//agar koi value nhi dega output undefine

