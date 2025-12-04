
// oops

// 1  (objects)

let user = {
    name:"ajay",
    age:20,
};

console.log(user.name);


// 2(classes)

class Remote {
    constructor(name , price , color){
        this.name = name;
        this.price = price;
        this.color = color;
    }

    unbox(){
        console.log("laptop is unbosed!!");
        
    }

    unbox(){
        console.log("laptop is not unbox!!");
        
    }
};

class Another {
    constructor(name , price , color){
        this.name = name;
    }

    unbox(){
        console.log("laptop is unbosed!!");
        
    }

    unbox(){
        console.log("laptop is not unbox!!");
        
    }
};


 let n = new Remote("lenovo" , "1200" , "red");
 n.unbox();
  
 let m = new Another("namer");


//  3 (prototype)
//  4 iska kaam hota h ki maan lo tumne ek class banayi or usme tumko apne function ko saare jitni bhi baar tum banao unme wo commom ho jaay......

class Human {
    constructor(name , price , color){
        this.name = name;
        this.price = price;
        this.color = color;
    }

    
};
    Human.prototype.saaansLo = function(){
     console.log("okkkkk");
    };
     Human.prototype.khanaKhao = function(){
     console.log("okkkkk");
    };

let h1 = new Human( "ajay " , 20 , "red");
let h2 = new Human( "ajay " , 100 , "red");
