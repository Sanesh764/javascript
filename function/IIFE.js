
//immediately invoked function expresssion (IIFE)

(function chai(){
    //name IIFE
    console.log(`db connendted`);
    
})();

(()=>{
    console.log(`Db connected two`);
    
})();

((name)=>{
    console.log(`Db connected from server name is ${name}`);
    
})("sanesh");
//jo function immediately execute ho jaye
//globle score ke pollution say problms hota hai usko hatane ke liye use karte IIFE
