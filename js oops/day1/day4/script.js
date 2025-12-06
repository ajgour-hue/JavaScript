
//  practice =================
// ===============================


// =========================================
// ===========     1    ====================
// =========================================
// Create a user object that stores name and email and has a login method which prints “User logged in”.

let user = {
    name:'ajay',
    email:'ajaygour62@gmail.com',

    LogggedIn(){
           console.log("User logged in");
    }
};

console.log(user);



// =========================================
// ===========     2    ====================
// =========================================

// Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

class User{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    companyName(){};
};

let u1 = new User( 'ajay' , '20' );
console.log(u1);
let u2 = new User( 'aja' , '15' );
console.log(u2);
let u3 = new User( 'aj' , '10' );
console.log(u3);
let u4 = new User( 'a' , '05' );
console.log(u4);
let u5 = new User( '' , '2' );
console.log(u5);




// =========================================
// ===========     3    ====================
// =========================================
// Create a product object that stores name and price and has a method which returns the final price after discount.

// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

let product = {
    name : 'daal',
    price : 200,
    discount(){
        let dis = this.price - 200;
        return dis;
    }
}

 console.log( product.discount());
    

 // =========================================
// ===========     4    ====================
// =========================================
// 	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed

class Car{
     constructor(brand , speed){
           this.brand = brand;
           this.speed = speed;
     }
     drive(){
        console.log(`car name is  ${this.brand} and having spped is ${this.speed}`);
     }
};

let c1 = new Car('maruti' , 280);
console.log(c1);
c1.drive();



 // =========================================
// ===========     5    ====================
// =========================================
// Create two different car objects from the same class and verify that their data is different.


class Thar{
     constructor(brand , speed){
           this.brand = brand;
           this.speed = speed;
     }
     drive(){
        console.log(`car name is  ${this.brand} and having spped is ${this.speed}`);
     }
};
let t1 = new Thar('ok' , 200);
let t2 = new Thar('okkkkkkk' ,  200);


 // =========================================
// ===========     6    ====================
// =========================================
// Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?


 // =========================================
// ===========     7   ====================
// =========================================
// Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.

 // =========================================
// ===========     8   ====================
// =========================================
// Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.


class Main {
    constructor(name){
        name = name;
    }
}
let nas = new Main('Ajay');



 // =========================================
// ===========      9        ================
// =========================================
// Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.

// The goal is to clearly understand how this works and when it changes.




 // =========================================
// ===========      10        ================
// =========================================
// Create a User constructor function (do not use class syntax).


function Users(name){

    this.name = name;
}

let m1 = new Users('ajay');
console.log(m1);




 // =========================================
// ===========      11        ================
// =========================================
// Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype




// 12
// Borrow a method from one object and run it for another object using call.

// The goal is to understand how this can be manually controlled.

let obj1={
    name : 'laks'
}

let obj2={
    func:function(){
        console.log( `${this.name}`)
        
    }
}

obj2.func.call(obj1);


// 13
// Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.

// Add one more method to the same object that increases the price by 10 percent.

// 	4.	Now imagine you need 10 laptops with same structure but different data.
// Write down (in words or code) what problems you will face if you keep using plain objects.


// Create a class named Employee that stores:
// name
// salary

// Add a method showDetails that prints name and salary.


// Create three employee objects from the same class and verify that modifying one employee does not affect the others.


class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showDetails() {
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
    }

    increaseSalary(amount) {
        this.salary += amount;
    }
}

const emp1 = new Employee("Ajay", 50000);
const emp2 = new Employee("Ravi", 60000);
const emp3 = new Employee("Simran", 55000);

emp1.increaseSalary(5000);

// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?




// Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.


// Add a method deposit(amount) that increases the balance.
class BankAccount {
    constructor(accountHolderName , balance){
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    }
}

let holder1 = new BankAccount('kamlesh' , 5000000);
console.log(holder1);
holder1.deposit(1)
console.log(holder1);

// Create an object named profile with a property username and a method printName that logs this.username.
	
let profile = {
    username : 'ajay',
   printName(){
    console.log(this.username);
   }
}

 let valu = profile.printName();
console.log(valu);  
// undefined Call the method normally and observe the output.

// Store the method in a separate variable and call it.
// Observe what happens to this and explain why.


// Create a function showBrand that prints this.brand.
function showBrand(){
    console.log(this.brand);
}

// Create two different objects with brand values.

let o1 = {
    brand: "mals",
}
let o2 = {
    brand: "laks",
}

showBrand.call(o1  );
showBrand.call(o2  );
// Explain what problem call is solving her



	// Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
	// 24.	

    function introduce(city , role){
        console.log(this.name);
           console.log(city);
              console.log(role);
    }
                
// Create an object with a name property.

let objk = {
    name:"ajay",
}

	// Use apply to call introduce using the object and an array of arguments.
    introduce.apply(objk , ['bhopal' ,  'devloper']);

    