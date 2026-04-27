
const promiseOne=new Promise((resolved,reject)=>{
    //Do and async task
    // Db CSSLayerStatementRule,criptograpg,network

    setTimeout(()=>{
        console.log("Async task is complete");
        resolved()
        
    },1000);
});
promiseOne.then(()=>{
    console.log("promise consumed");
    
})

new Promise((resolved,reject)=>{
    setTimeout(()=>{
        console.log("async task two");
        resolved()
        
    },1000)
}).then(()=>{
    console.log("async two resolved");
    
})

const promiseThree=new Promise((resolved,reject)=>{
    setTimeout(()=>{
        resolved({username: "sanesh",email:"sanesh@gmail.com"});
    },1000)
});
promiseThree.then((user)=>{
    console.log(user);
    
})

const promsieFour=new Promise((resolved,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolved({username: "papu",password:"sanesh@com"});
        } else{
            reject("error :something want wrong");
        }
    },1000)
})
promsieFour.then((user)=>{
    console.log(user);
    return user.username;
    
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log("the promise is resolved or rejected")
)

const prmiseFive=new Promise((resolved,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolved({username:"javascript",password:"123456"})
        } else{
            reject("ERROR:js want wrong");
        }
    },1000)
})
async function consumePrmiseFive() {
    try{
        const response=await prmiseFive;
        console.log(response);
    } catch(error){
        console.log(error);
        
    }
    
}
consumePrmiseFive();

//method 1 using async function

// async function getAllUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
        
//         const data= await response.json();
//         console.log(data);
//     } catch(error){
//         console.log("E: ",error);
        
//     }
    
// }
// getAllUsers();

//method 2

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data); 
})
.catch((error)=>console.log(error));