
// function sayHello(){
//     console.log("helloo javascript");
// }
// sayHello();

 function add( a ,  b){
      return a+b ;
}
let ans = add(10,10);
console.log(ans);

function name(name = "ajay"){
    console.log(`hi ${name}`);
}
name();


    let sum = 0 ;
function addUnlimited(...nums){
  nums.forEach(function(val){
    sum = sum+val;
  })

}
addUnlimited(1,2,3,4,7,10);

console.log(sum); 


(function (){
    console.log("this runs");
})();



function outer(){
    let a =  10 ;
    function inner(){
        console.log(a);  }
        inner();
}
outer();



let fruits = ["apple" , "mango" , "guava" , "orange" , "grapes" ];
fruits.unshift("akls");
console.log(fruits);  
fruits.push("laks");



let arr = [1,2,3,4,5,5];
arr.forEach( function(val) {
     console.log(val);
});


// setTimeout(function(){
//  console.log("hi")
// },2000);

// // higher order function 
// function abcd() {
//     return function val () {
//       console.log("hr");
//     }
// }
// abcd()();


// function runTwice(fn){
//   fn();
//   fn();
// }
// runTwice( function () {
//   console.log("hy");
// });


// important
// this


// let obj = {
//   name:"ajay",
//   age:20,
//   fun: function(){
//       console.log(this);
//   },
//   fun2: ()=>{  // yeh arrow function apne parent ki valu ko leta hain or hamko pata hai globla k liye this ti window  return karta hain .
//      console.log(this);
//   },
// }
// obj.fun();
// obj.fun2();

let obj = {
  name: "ajay",
  age: 20,
  fun: function () {

    const fun2 = () => {  
      console.log(this);  
      // Arrow function = parent ka this lega
    };

    fun2();
  },
};

obj.fun();
