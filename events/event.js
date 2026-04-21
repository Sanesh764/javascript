
// document.getElementById("owl").onclick=function(){
//     alert("owl is clicked");
// }
//attachEvent()
//jQyery-on
//want we study-> type,timestamp,defaultPrevented
//target,toElement,srcElement,currentTarget
//clientX,clientY,screenX,screenY
//altkey,ctrlkey,shiftkey,keyCode
document.getElementById('images').addEventListener('click',function(e){
    console.log("click inside the ul");
    
},false);//default false hota hai isliye nhi bhi likho to chalo

document.getElementById("owl").addEventListener("click",function(e){
    console.log(("owl clicked"));
    e.stopPropagation();
    
},false);
/*
agar yaha false hai to pahale
owl clicked hoga uske badh
click inside the ul ye clcik hoga

agar yaha treu hai to pahale
click inside the ul ye clcik hoga
owl clicked hoga uske badh
*/

document.getElementById("google").addEventListener("click",function(e){
    console.log("google was clicked");
    e.preventDefault();
    e.stopPropagation();
})
