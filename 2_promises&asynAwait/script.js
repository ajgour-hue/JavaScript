
// let ans = new Promise(function (resolve , reject){
//     setTimeout(function(){
//         resolve();
//     } , 20000);
// });

// ans.then(function(){
//     console.log("Rsolved");
//     })
// .catch(function(){
//     console.log("rejectedv");
// })





// fetch(' https://randomuser.me/api/').then(function(notReadableData){
//    return notReadableData.json();
// })
// .then(function(asliData){
//     console.log(asliData.results[0].gender );
//     })
//     .catch(function(err){
//         console.log(err);

//     })





// async function ab(){
//     let raw =  await fetch(`https://randomuser.me/api/`);
//     let data = await raw.json();
//     console.log(data);
//     }

//     ab();

function getNum() {
    return new Promise(function (resolve, reject) {
        let num = Math.floor(Math.random() * 10);
        if (num > 5) {
            resolve(true);
            console.log("resolved");
        }
        else {
            reject(false);
            console.log("rekected");
        }
    })
}
  async function ab(){
    await getNum();
 }

 ab();