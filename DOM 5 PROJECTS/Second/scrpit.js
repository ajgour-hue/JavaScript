
var con = document.querySelector('#container');
var love = document.querySelector('i');

con.addEventListener('dblclick' , function(){
    love.style.transform =  'translate(-50% , -50%) scale(1)';
    love.style.opacity = 0.8 ;
    love.style.color = ' rgb(231, 72, 15)'
    setTimeout(function(){
         love.style.opacity = 0;
    },1000);

    setTimeout(function(){
         love.style.transform =  'translate(-50% , -50%) scale(1)';
    },1000);
})
