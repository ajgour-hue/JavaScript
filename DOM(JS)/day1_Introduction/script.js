
let h1 = document.querySelector('h1');
console.log(h1);

h1.innerHTML = 'mene isko badal diya hain .';
h1.style.color = 'white';
h1.style.backgroundColor = 'white';
h1.addEventListener('click' , function(){
h1.innerHTML = 'mene isko badal diya hain . askl';
})

let btn  = document.querySelector('button');
btn.addEventListener('click' , function(){
    h1.innerHTML = 'i am clicked .';
    h1.style.color = 'royalblue';
    h1.style.fontSize = '90px';
    h1.style.borderRadius = '10px';
})