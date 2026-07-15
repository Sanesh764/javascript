
// const h1=document.querySelector("#h1");
// //h1.innerText="hello world";
// //h1.innerHTML="you are good";
// h1.textContent="kya hal chal";

//textContent

// const h1 = document.querySelector("#h1");
// console.log(h1.textContent);//
// h1.textContent = "<b>Sanesh</b>";//yaha hidden word bhi dekh jata h but <b>sanesh</b> ishi hi print hoga

//innerText
// const h1 = document.querySelector("#h1");
// console.log(h1.innerText);
// h1.innerText = "<b>Sanesh</b>";//yaha direct <b>sanesh</b> print hoga no chnage

//innerHtml
// const h1 = document.querySelector("#h1");
// console.log(h1.innerHTML);
// h1.innerHTML = "<b>Sanesh</b>";//yaha text ko actual me bold kae dega

const p=document.createElement("p");
p.innerText="loren 5000";
document.body.appendChild(p);

p.remove();

const old=document.querySelector("h1");
const h2=document.createElement("h2");
const button=document.createElement("button");
button.innerText="click me";
document.body.appendChild(button);

button.addEventListener("click",()=>{
    console.log("button was clicked");
    
})

h2.innerText="mai hu code karne wla balak";
old.replaceWith(h2);