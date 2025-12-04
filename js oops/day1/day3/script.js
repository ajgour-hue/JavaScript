
// // inheitance 

// class Animal{
//     constructor(){
//         this.leg = 2;
//         this.hand = 2;
//     }

//     breathe(){};
//     eat(){};
// }

// class Kekda extends Animal{
//     super(){
//         this.leg = 8;
//     this.hand = 0 ;
//     }

//      walkingStyle(){};
// }

//   let ans  =    new  Kekda();
  

//   getter setter 
class Animal {
    constructor(){
        this.name = 'laks';
        this._age  = 10;
        // ._age matlan yeh ek tarike se private ki tarah mana jata hai jiski valu tum nhii badal sakte lekin yeh sirf dikhane k liya hita h baaki iski valu badli ja sakti hain.................
    }

    set age(val){
        if(val<0){
            console.error("something");
        }
        thid._age = val; 
        return thia._age;
    }

    get age(){
           return this._age;
    }
};
let a1 = new Animal();
// console.log(a1._age = 20);

console.log(a1.age);





