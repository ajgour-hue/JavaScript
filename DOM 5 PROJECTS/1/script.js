
var h5 = document.querySelector('h5');
var addfriends = document.querySelector("#add-friend");


var flag = 0 ;
 addfriends.addEventListener('click' , function(){
    if(flag == 0){
        h5.innerHTML =" Friends";
        addfriends.innerHTML = "Remove";
    h5.style.color = "green";
    flag = 1 ;
    }
    else{
        h5.innerHTML =" Stranger";
           addfriends.innerHTML = "Add-Friend";
    h5.style.color = "red";
    flag = 0 ;
    }
 })
