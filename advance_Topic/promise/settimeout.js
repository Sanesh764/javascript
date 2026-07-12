// setTimeout(() => {
//   console.log("this is the first message");
// }, 5000);
// setTimeout(() => {
//   console.log("this is the second message");
// }, 3000);
// setTimeout(() => {
//   console.log("this is the third message");
// }, 1000);

let timer=setTimeout(() => {
    console.log("OTP Expired");
}, 60000);

console.log("Loading...");

setTimeout(() => {
    console.log("Data Loaded");
}, 2000);

clearInterval(timer);//