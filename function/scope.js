
// if(true){
//     let a=1
//     const b=23
//     var c=10;//then we don,t use var
// }
// console.log(a);//give error
// console.log(b);//give error
// console.log(c);//output 10


function one(){
    const username="sanesh"

    function two(){
        const website="ytb"
        //console.log(website);//give error
        console.log(username);
        
    }
    //console.log(website);//give error
    two();
}
one();