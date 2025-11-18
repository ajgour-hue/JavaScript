
let h1 = document.querySelector('h1');
let btn1 = document.querySelector('#one');
let btn2 = document.querySelector('#two');

var a = 0 ;
btn1.addEventListener('click',function(){
      a++;
      h1.innerHTML = a;
      if(a==5){
        h1.innerHTML = 'you hits the maximum limit !!';
      }
})

btn2.addEventListener('click',function(){
      a--;
      h1.innerHTML = a;
      if(a== -5){
         h1.innerHTML = 'you hits the maximum limit !!';
      }
})