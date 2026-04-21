
const sayDate=function(str){
    console.log(str,Date.now());
    
}
const invervalId=setInterval(sayDate,1000,"hi");

clearInterval(invervalId);