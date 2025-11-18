
var btn = document.querySelector('button');
var body = document.querySelector('body');
var arr = ['VIRAT' , 'EGO' , 'KL RAHUL' , 'MSD', 'SHUBHMANGILL'];

btn.addEventListener('click' , function(){
    var h1 = document.createElement('h1');

   var x = Math.random()*90;
   var y = Math.random()*90;
   var rot = Math.random()*100;
   var ans =Math.floor( Math.random()*arr.length);

  
   h1.innerHTML=arr[ans];
   h1.style.position ='absolute';
   h1.style.left = x+'%';
   h1.style.top = y+'%';
   h1.style.rotate = rot+'deg';
   body.appendChild(h1);


})