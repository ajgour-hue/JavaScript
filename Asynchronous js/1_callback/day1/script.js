
// // call back function matlab jab bhi ham fuction ke parameter ke under function dete hai to bo paramater accept karne wala  function callback kehlata hain ..................

// function a (func){
//    func ();
// }

// a(function(){
//     // callabck hain
//     console.log("kals"); 
// })



// // callback hell

// function profileLekarAao( username , cb){
//       setTimeout( ()=>{
//         cb({ username , age:20});
//       } , 2000);
// }

// function saarePostLekarAao( id ,cb){
//        setTimeout(()=>{
//            cb({ _id:id , post:["hey"]})
//        } , 3000)
// }

// profileLekarAao("ajay" , function(data){
//     saarePostLekarAao(data._id , function(posts){
//         console.log(posts);
//     })
//   console.log(data);
// });




// call back hell fir se harsh bhaiiya

function iceCreamLekarAao( address , cb){
    cb({ lat: 20  , lon: 40});
}


iceCreamLekarAao("indrapuri se" , function(dets){
        console.log(dets.lon);
})