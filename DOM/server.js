
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

