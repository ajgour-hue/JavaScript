

var arr = [
    {
      team: 'RCB',
      primary: 'red',
      secondary: 'black',
      captain: 'Virat',
      trophy: '1',
    },
    {
      team: 'MI',
      primary: 'blue',
      secondary: 'gold',
      captain: 'Rohit',
      trophy: '5',
    },
     {
      team: 'CSK',
      primary: 'yellow',
      secondary: 'blue',
      captain: 'MSD',
      trophy: '5',
    },
     {
      team: 'SRH',
      primary: 'orange',
      secondary: 'red',
      captain: 'PATTY',
      trophy: '1',
    },
     {
      team: 'DC',
      primary: 'blue',
      secondary: 'purple',
      captain: 'Akshar',
      trophy: '0',
    },
     {
      team: 'PKBS',
      primary: 'orange',
      secondary: 'silver',
      captain: 'Shreyas',
      trophy: '0',
    },
]

var h1 = document.querySelector('h1');
var main  = document.querySelector('#main');
var btn = document.querySelector('button');

btn.addEventListener('click' , function(){
    var winner = arr[Math.floor(Math.random()*arr.length)];

    h1.innerHTML = winner.team;
  h1.innerHTML = `🏆 Trophies: ${winner.trophy} <br> 🏏 Team: ${winner.team}`;

    h1.style.backgroundColor = winner.secondary;
     main.style.backgroundColor = winner.primary;
//    console.log(winner);
console.log(winner.team, winner.primary, winner.captain);

})