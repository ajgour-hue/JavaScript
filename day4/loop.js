
// //  conditional statments
// let a = 12;
// if(a<19){
//     console.log("its true")
// }
// else{
//     console.log("false");    
// }

// //  truthy falsy banaya gaya kyonki if  ke unde to valu ya to true ho sakti hain ya false  lekin hamare unde hain keeda ham to kuch bhi likh sakte hain to fir concept aata hain truthy and falsy ka 

// // falsy -> NaN , null , " " , document.all , undefined , 0 , false
// //  truthy -> all comes in true
// // if(12){
// // //   this 12 is not lies in falsy category then it is truthy 12 ------ true
// // }

// if(12){
//     console.log("hey");
// }
// else{
//      console.log("hello");
// }

// if(0){
//     console.log("hey");
// }
// else{
//      console.log("hello");
// }



// //  loop practice
// for(start;end; count){

// }

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// for(let i=1;i<=10;i++){
//     console.log("heloo");

// }

// let i=10;
// while(i>0){
//       console.log(i);
//       i--;
// }

// for(let i=0;i<=20;i = i+2){
//     console.log(i);
// }


// let i=1;
// while(i>=15){
//       console.log(i);
//       i = i+2;
// }
//  let sum = 0;
// for(let i=1;i<=100;i++){
//      sum += i;
  
// }
//   console.log(sum);

// for(let i=1;i<=50;i++){
//     if( i%3 === 0){
        
//     console.log(i);
//     }
// }

let val = prompt("enter your number.");
for(let i=1;i<=val;i++){
    if(i%2 === 0 ){
          console.log( i + " is even ....");
    }
    else{
        console.log(i + " odd");
    }
}