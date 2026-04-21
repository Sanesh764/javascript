
// setTimeout(function (){
//     console.log("sanesh kumar");
    
// },2000);
// setInterval(function(){
//     console.log("fuck");
    
// },1000);

const saySanesh =function(){
    console.log("you are best guyes");
    
}
const chargeText=function(){
    document.querySelector('h1').innerHTML="your are the best you can do it";
}
// setInterval(chargeText,3000);
const changeMe=setTimeout(chargeText, 2000);

document.querySelector("#stop").addEventListener("click",function(){
    clearTimeout(changeMe);
    console.log("operation was stop if you click stop button");
    
},false);