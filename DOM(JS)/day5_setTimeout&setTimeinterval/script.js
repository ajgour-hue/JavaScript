

// setTimeout = delay 
var h1 = document.querySelector('h1');
var btn = document.querySelector('button');

btn.addEventListener('click' , function(){
    h1.innerHTML = 'Changing User .....';

    setTimeout(function(){
        h1.innerHTML = 'hello i am ajay gour';
    },2000);
});

// setInterval = control loop that is stop by clearInterval(parameter)
var a = 0 ;
var int = setInterval(function(){
  a++;
  console.log(a);
},50);

setTimeout(function(){
 clearInterval(int);
},1000);

