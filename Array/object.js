const students=[
    {
        name:"sanesh",
        age:20,
    },
    {
        name:"suman",
        age:40,
    },
    {
        name:"santosh",
        age:25,
    },
];

const name=students.map((student)=>{
    return student.name;
});
console.log(name);
