const marks = [80, 90, 30];

//ye cheak karta h kya sara conditon true hai ya nhi ans give in true false
const result=marks.every((mark)=>{
    return mark>=70;
})
console.log(result);

const employees = [
    { verified: true },
    { verified: true },
    { verified: true }
];

const allVerify=employees.every((employee)=>{
    return employee.verified===true;
});
console.log(allVerify);
