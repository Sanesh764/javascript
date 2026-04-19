
const myObj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swify:"swift by apple"
}

for (const key in myObj){
    //console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const prpgramming=["js","rb","js","java","py"];

for(const key in prpgramming){//isme array ka key aata hai if we use for in
    console.log(prpgramming[key]);    
}