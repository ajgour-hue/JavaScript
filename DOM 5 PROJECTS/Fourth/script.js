
// var elem = document.querySelectorAll('.elem');

// elem.forEach(function(val){
//   val.addEventListener('mouseenter' , function(){
//     val.childNodes[3].style.opacity = 1 ;
//   })

//    val.addEventListener('mouseleave' , function(){
//     val.childNodes[3].style.opacity = 0 ;
//   })

//    val.addEventListener('mousemove' , function(dets){
//     val.childNodes[3].style.left = dets.x+'px';
//      val.childNodes[3].style.top = dets.y+'px';
//   })
// })

var elem = document.querySelectorAll('.elem');

elem.forEach(function(val){
  
  let img = val.childNodes[3];

  val.addEventListener('mouseenter', function(){
    img.style.opacity = 1;
  });

  val.addEventListener('mouseleave', function(){
    img.style.opacity = 0;
  });

  val.addEventListener('mousemove', function(dets){

    let rect = val.getBoundingClientRect();

    let x = dets.clientX - rect.left;
    let y = dets.clientY - rect.top;

    img.style.left = x + "px";
    img.style.top = y + "px";
  });

});
