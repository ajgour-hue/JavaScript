
let obj1 = {
    name: "ajay",
    age: 20,
    khana:"khalo na",
};
//  1 method to access them .................
// obj1.name;
// obj1.age;
// obj1.khana;

// 2 agar hamko ek variable bahar bana kar access karna hain to fir 
let aa = "name";
obj1[aa];



// nesting in the objects
let user = {
    name:"ajay",
    age:10,
     address:  {
        code: 466665,
          Locations: {
                lang:12,
                lat:14,
          },
    },
};

// ACCESS
user.address.Locations.lat;


// Destructuring of the objects
let{lang , lat}  = user.address.Locations;


let obj = {
    name: "ajay",
    age: 20,
    khana:"khalo na",
};
// for in loop in js
for(let key in obj){  
   console.log( `${key} : ${obj[key]}`);
}


let obj2 = {...obj};
// this will works only inj not with work by nested objects

let object = {
    name : "alks",
    age: 9,
    newOne:{
          address:"bhopal",
    },
};
// it copies and chane the refrences
let newobj = {...object};

let newobj1 = JSON.parse(JSON.stringify(newobj));

