

var arr  = [
    {
       dp:"https://i.pinimg.com/736x/25/06/87/250687c2ae6377d2de816c47c619a6bc.jpg",
       story:"https://i.pinimg.com/736x/be/13/24/be13246b81de4d28a1b912b971c826d4.jpg"
    },
    {
       dp:"https://i.pinimg.com/736x/ca/d7/8e/cad78eb43c7cb7a4e6f1c4fa392d8fa4.jpg",
       story:"https://i.pinimg.com/736x/03/55/12/035512e8c56652ed35837ed6485e8cdc.jpg"
    },
    {
       dp:"https://i.pinimg.com/736x/25/06/87/250687c2ae6377d2de816c47c619a6bc.jpg",
       story:"https://i.pinimg.com/736x/be/13/24/be13246b81de4d28a1b912b971c826d4.jpg"
    },
    {
       dp:"https://i.pinimg.com/736x/25/06/87/250687c2ae6377d2de816c47c619a6bc.jpg",
       story:"https://i.pinimg.com/736x/be/13/24/be13246b81de4d28a1b912b971c826d4.jpg"
    },
    {
       dp:"https://i.pinimg.com/736x/25/06/87/250687c2ae6377d2de816c47c619a6bc.jpg",
       story:"https://i.pinimg.com/736x/be/13/24/be13246b81de4d28a1b912b971c826d4.jpg"
    },
]

var clutter = "";
arr.forEach(function(elem , idx){
  clutter += `  <div  class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
 })

 var storiyan = document.querySelector('#storiyan');
 storiyan.innerHTML = clutter;
 storiyan.addEventListener('click', function(dets){
    
    document.querySelector('#full-screen').style.display = 'block';
    document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`
 });

 setTimeout(function(){
 document.querySelector('#full-screen').style.display = 'none';
 },4000);


 
    
