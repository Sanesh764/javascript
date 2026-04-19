
// let id=document.getElementById("title");
// id.innerText="sanesh kumar singh"

// let text=document.querySelector("h1")
// text.innerText="ma chudao";


// let li=document.querySelectorAll("li");
// li[0].style.color="green"
// let a=19

const tempClassList = document.getElementsByClassName("list-item");
const myconvertedArray = Array.from(tempClassList);

myconvertedArray.forEach((li) => {
    li.style.color = "orange";
    li.style.backgroundColor="yellow";
    li.innerHTML="kya hal hai";
    li.style.padding="23px";
});
