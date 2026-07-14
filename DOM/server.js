
// const heading=document.getElementById("title");
// console.log(heading);

// // const para=document.getElementsByClassName("text");
// // console.log(para);

// const para=document.querySelector(".text");
// console.log(para);

// const h1=document.getElementById("title");
// h1.innerText="kya hal chal h";
const h1=document.querySelector("#title");
h1.innerText="hello and welcome to our college"
h1.style.color="red";

// const p=document.getElementsByClassName("text");
// p[0].innerText="pyar hai to hai or kya";

// const p = document.querySelector(".text");
// p.innerText = "pyar hai to hai ya kya";

const p=document.querySelectorAll(".text");
p.forEach((ele)=>{
    ele.innerHTML="this is using quesryselectorAll method";
})

// const box=document.querySelector(".box");
// box.classList.add("active");

const h2=document.createElement("h2");
h2.innerText="aldi waha say hato";
document.body.appendChild(h1);

const btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    const p=document.createElement("p");
    p.innerText="new paragraph is added";
    document.body.appendChild(p);
});

const form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("form was submitted");
    console.log("thans");
    
    
})

