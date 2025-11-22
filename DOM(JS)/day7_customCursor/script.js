
var main = document.querySelector('main');
var img = document.querySelector('img');
main.addEventListener('mousemove' , function(elem){
   img.style.left = elem.x+'px';
   img.style.top = elem.y+'px';
})