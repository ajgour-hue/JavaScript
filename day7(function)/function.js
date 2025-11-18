
// //  basic syntax
// function  abcd(){
//     console.log("this is the function in js");
// }

// abcd();



// // 2.......................
//   function abcd(val){
//     console.log(`${val} naach rha hai`);
// }

// abcd("ghoda");
// abcd("ghadha");



// // 3...............
//    let variable = function ab(){
//     console.log("hy");
// }

// console.log(variable);



// //  4................return 
// function ab (val) {
//     return 12 + val ;
// }
// let val = ab(23);
// console.log(val); 


// //  5 recursion function ke unde function hota hai to .................

// function sum(n) {
//   if (n === 0) {   // base case
//     return 0;
//   }
//   return n + sum(n - 1);  // recursive call
// }

// console.log(sum(5));  // Output: 15 (5+4+3+2+1)


// //  first class function ..............
// function abcd(val) {
//       val () ;
// }
// abcd(
//     function(){
//         console.log("hey");
//     }
// );






// // higher order function 
// function abcd() {
//     return function val () {
//       console.log("hr");
//     }
// }
// abcd()();



//  pure and impure function 
 let a = 12 ;

 function abcd(){
  console.log("hy");
 }
abcd();
 function impure(){
  a++;
  console.log(a);
 }
 impure();


// closure -> ek esa function jo return kare ek or function ans use kare variable of parent function

function parent(){
  let a = 12 ;  
   return function child(){
     console.log(a);
   }
}


// lexical scoping matlan usko usi function ke under use kar sakte hain 
 function abcd(){
 let a = 12 ;
 function defg(){
  let b = 10 ;
  function z () {
     let x = 0 ;
  }
 }
 }


 // iifc immediatly invoked function call 
 (function a() {
  console.log("hy");
 })();


 //   function hoisting
// yeh worh karta hain jab sttement m ho lekin agar expresision m h to nhiii hoga

// statment
ab();



function ab() {
  console.log("ka");
} 



// // expression 

// s();

//  let s =function(){
//   console.log("ka");
// }



//  destructured
//  function abcd(obj){
//     console.log(obj)
//  }
//  abcd({name : "ajay" , age : 20});

 function abcd({name , age}){
    console.log(name , age);
 }
 abcd({name : "ajay" , age : 20});