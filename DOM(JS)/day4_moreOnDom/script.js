// // creation of an any element in dom by createElement tag we make any one of them like img div class id and tags

// var divs = document.createElement('div');
// console.log(divs);


// var btn = document.querySelector('button');
// btn.addEventListener('click' , function(){
//     var h2 = document.createElement('h2');
//     h2.innerHTML = "this is the h2 in js";
//     console.log(h2);
// })


// // appending of an any child means ham naya element add kar rahe hain existing element k baad 

// var btn1 = document.createElement('button');
// btn1.innerHTML = 'download';
// btn1.style.color = 'red';
// var main = document.querySelector('body');
// main.appendChild(btn1);


var btn = document.querySelector('button');
var body = document.querySelector('body');

btn.addEventListener('click' , function(){

    var div = document.createElement('div');
   var x = Math.random()*100;
   var y = Math.random()*100;
   var c1 = Math.floor(Math.random()*256);
     var c2 = Math.floor(Math.random()*256);
       var c3 = Math.floor(Math.random()*256);
  var rot = Math.random()*10;
 var border = Math.random()*50;
 var scale = Math.random();

    div.style.height='100px';
    div.style.width='100px';
    div.style.position = 'absolute';
    div.style.left = x+'%';
    div.style.top = y+'%';
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    div.style.rotate = rot+'deg';
    div.style.borderRadius = border+'px';
    // div.style.scale = scale;
    body.appendChild(div);
})  