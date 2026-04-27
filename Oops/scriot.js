
//collection of properites and methods

const user={
    username:"sanesh",
    loginCount:10,
    signedIn:true,
    getUserDetails:function(){
        // console.log("get all users data from database");
        // console.log(`UserName: ${this.username}`);
         console.log(this);
        
    }
}
// console.log({User});
// console.log(User.username);
// console.log(User.getUserDetails());


//constructor function

function User (username,logincount,loggedIn){
    this.username=username;
    this.loginCount=logincount;
    this.loggedIn=loggedIn;
    
    this.greeting=function(){
        console.log(`welcome ${this.username}`);
        
    }
}

const userOne=new User("sanesh",12,true);
const userTwo=new User("priya",12,false);
console.log(userOne);

console.log(userOne.constructor);

// console.log(userTwo);
