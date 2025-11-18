
// //  practice conditionals

// // Level 1 – Pure Beginner Practice

// // 7. Ask user’s age and check if eligible to vote
// // If age >= 18 → “Eligible”, else → “Not eligible”

//   let age = prompt("enter your age ");
// if(age>=18){
//     console.log(" Eligible ");
// }
// else{
//      console.log(" Not eligible ");
// }






// // Count how many numbers between 1 and 15 are greater than 8
// // Loop and count conditionally.
// let c = 0 ;
// for(let i=1;i<=15;i++){
//     if(i>8){
//       c++;
//     }
//     else{
//         i++;
//     }
// }
// console.log(c);







// // Ask user for password and print access status
// // Hardcoded correct password. Compare with user input.

// let correctPass = "ajay1234";
// let userPass = prompt(" enter pass");

// if( correctPass === userPass){
//     console.log("acces granted");
// }
// else{
//     console.log("acces denied");
// }






// // Level 2 – Slightly Tougher but Logical
// // 11. Allow only 3 attempts to enter correct password
// // If user gets it right early, stop. If not → “Account locked”



// let correctPass = "ajay1234";

// for(let i = 2 ;i>=1;i--){

//     let userPass = prompt(" enter pass");

//     if(userPass === correctPass){
//     console,log(" correct ......");
//     break;
// }
// else if(i>1){
//     console.log(" only "+ (i-1) + "attemps left ");   
// }
// else{
//     console.log("account locked");
// }

// }







// // Ask user for words until they type “stop”. Count how many times they typed “yes”
// // Loop until "stop" is typed. Count "yes".


// let userVal = "";
// let c = 0 ;
// while(userVal !== "stop"){
//     let userVal = prompt("enter stop ");
//     if(userVal === "stop" ){
//         break;
//     }
//     else{
//        c++;
//     }
// }
// console.log(c);





// // Print numbers divisible by 7 from 1 to 50
// // Use modulo % and loop.

// for(let i=1;i<=50;i++){
//       if(i%7 === 0){
//         console.log(i);
//       }
//       else{
//         i++;
//       }
// }




// // Sum of all odd numbers from 1 to 30
// // Add only odd numbers. Print final sum.
// let sum = 0 ;
// for(let i=1;i<=30;i++){
//     if(i%2 !== 0){
//        sum += i ;
//     }
// }
// console.log(sum);



// // Keep asking number until user enters an even number
// // Use while loop. Stop only if input is even.

// let num ;
// while(true){
//     num = prompt("Enter nu if you enter even then stop");
//     if(num%2 === 0){
//         break;
//     }
//     else{
//         console.log("try again");
//     }
// }


// //  Print numbers between two user inputs
// // Input start and end using prompt() → print all between

// let st = prompt();
// let end = prompt();
// for(let i=st ; i<=end;i++){
//         console.log(i);
// }







// //  Print only first 3 odd numbers from 1 to 20
// // Use loop. Stop with break after 3 odd prints.
// let oddCount = 0;
// for(let i=1;i<=20;i++){
//         if(i%2 !== 0){
//               oddCount++;
//             if(oddCount === 5){
//                 break;
//               }
//         }
// }
// console.log(oddCount);




// ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”