
// let obj = [
//     {
//         name:"ajay",
//         age:10,
//         city:"bhopal",
//     },
//      {
//         name:"ankit",
//         age:10,
//         city:"bhopal",
//     },
//      {
//         name:"king",
//         age:10,
//         city:"bhopal",
//     },
//      {
//         name:"raja",
//         age:10,
//         city:"bhopal",
//     },
// ]

// console.log(obj[0].age);


// 2.................
// let arr = [10,20,30,40];
// arr.forEach(function(elem,index){
//     console.log(elem , index);
// })



// let arr = [10,20,30,40];
// let sum =  0;
// arr.forEach(function(elem){
//     sum += elem;
// })







// hamko obj ke saare age ka sum karna hain


let obj = [
    {
        name:"ajay",
        age:10,
        city:"bhopal",
    },
     {
        name:"ankit",
        age:10,
        city:"bhopal",
    },
     {
        name:"king",
        age:10,
        city:"bhopal",
    },
     {
        name:"raja",
        age:10,
        city:"bhopal",
    },
]

let s = 0 ;
obj.forEach(function(elem){
    s+=elem.age;
})
console.log(s);