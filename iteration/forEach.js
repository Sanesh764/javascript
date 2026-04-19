
const coding=["js","ruby","java","python","c","c++"];

// coding.forEach( function (item){
//     console.log(item);
    
// } )

//using arrow function we use foreach loop

// coding.forEach((val)=>{
//     console.log(val);  
// })

// function Hello(){
//     console.log("hello world");
    
// }
// coding.forEach(Hello)


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr); 
// })

//array ke under object

const mycoding=[
    {
        languageName:"javascript",
        languageFile:"js"
    },
    {
        languageName:"java",
        languageFile:"java"
    },
    {
        languageName:"c++",
        languageFile:"cpp"
    },

]

mycoding.forEach((item)=>{
    console.log(item.languageName);
    
})