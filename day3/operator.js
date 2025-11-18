
// arithmetic operator
//  + - / * %

let a = 10 , b=20;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a%b);


// Assignment opertor
//  += -= *= /= %=

console.log(a += 12);
console.log(a -= 12);
console.log(a *= 12);
console.log(a /= 12);
console.log(a %= 10);

// comparision operator
//  == , === , != ,!== , >,< , >= , <= 

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(a > b);
console.log(a < b);

// ternary operator
112>12 ? console.log("haan") : console.log("naaaaa");

// Nullish coelancing operator 
null ?? console.log("iska use hum backend me karenge");
// agar user ?? console.log("user does not exist");

// optional chaining
// ?. safe acess to nested values
let obj = {}
obj?.name?.first



// hoisting
//  iska matlab hai ki hum log variable ko banane se phele use kar sakte hain 
//  yeh do hisso me toot jata hain 
// for eg if we have a var 
//  var a=12; then   
//  var a; initialization and top of the file pahunch jata hain 
//  a=12; declaration  and yeh jaha hai wahi rehta hain
//  isliye error na deke undefinedf dikhata hain kyonki wo use hone sphele hi exist kar rha tha.

//  it doesnt work with let  beacause of tde temporal dead zone . 

