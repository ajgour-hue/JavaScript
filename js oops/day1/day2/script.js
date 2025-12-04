
// globally valu of this is -> Window ;
console.log(this);


// fucntion ke unde bhi -> Window ;
function name(){
    console.log(this);
}
name();

// es5 fucn inside obj ->object;
let ob = {
    func:function(){
        console.log(this);
    },
}
ob.func();

// es6 fucn inside obj ->Window;
let es6 = {
    fun: ()=>{
        console.log(this); 
    },
}

es6.fun(); 

// es5 function es5 fucnction innsife Object => Window;
let objecty = {
    fu: function outer(){
       function insider(){
         console.log(this);
         
       }
       insider();
    },
}

objecty.fu();

// ek object jiske under es6 function hai or uske under es5 function hai to -> object;
let naks = {
         hk: function() {
           const m = () => {
            console.log(this);
        };
m();
        }
    };
naks.hk();