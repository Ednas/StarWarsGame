//Global variables

//Array of Playable Characters
var characters = ['ben', 'darth', 'finn', 'rey'];
var chosenCharacter = [];
var remainingCharacter = [];
var chosenDefender = [];

//stolen from stopwatch to try and plug in here
window.onload = function(){
  //click events are done for you:
  $('.bena').click(characters.ben);
  $('.dartha').click(characters.darth);
  $('.finna').click(characters.finn);
  $('.reya').click(characters.rey);
};

var players = 
{
	rey:function()
{
	hitpoints = 180
	damage = 20
}
	darth:function()
{
	hitpoints = 150
	damage = 15
}
	finn:function()
{
	hitpoints = 125
	damage = 10
}
	ben:function()
{
	hitpoints = 100
	damage = 8
}
}


//Starts the game
function startGame() {

	$("characters").click(function() {
		alert( "You selected 'characters'")
	});

	console.log("characters");
}
//Random elements I think I will need
//Selects an element
	document.getElementById('');
//Does a thing when clicked
	document.onClick();
//When clicked - character background will change color
	document.onClick()=changeColor();

//Attempting to do the math to reduce the hitpoints in a fight
fight function();{
	var hitPoints
	var defense
}