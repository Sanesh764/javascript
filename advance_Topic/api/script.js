const requestUrl = 'https://api.github.com/users/sanesh764';

const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);

xhr.onreadystatechange =()=>{
    console.log(xhr.readyState);
    if (xhr.readyState === 4) { 
        const data=JSON.parse(xhr.responseText);
        console.log(typeof data);
        console.log(data);  
    }
}
xhr.send();
//agar yaha normal function use karte toh 
//const data=JSON.parse(this.responseText); yaha this keywork ka use karte arrow function ke pass this ka access na hota hao

