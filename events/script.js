
document.querySelector("#images").addEventListener("click",function(e){
    // console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if(e.target.tagName==='IMG'){
        console.log(e.target.id);
        
        let removeIt=e.target.parentNode;
        removeIt.remove();
    }
    //removeIt.parentNode.removeChild(removeIt);
},false);

document.getElementById("google").addEventListener("click",function(e){
    e.preventDefault();
    console.log("google button is disabled");
    
},false)