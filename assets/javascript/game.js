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

//please make code happen...
randCharacters : 
            {
            Jack: {
            name: "Jack",
            totalHealth: 200,
            currentHealth: 200,
            attack: 8,
            counterAttack: 25,
            //mana and return mana on attack clicks?
            //defense
            //weakness
            //ability
            image: "<img class='pixelPic' src='assets/images/jackR.png'>",
            imageComp: "<img class='pixelPic' src='assets/images/jackL.png'>"},

            Spike: {
            name: "Spike",
            totalHealth: 400,
            currentHealth: 400,
            attack: 2,
            counterAttack: 30,
            // ability taunt,
            image: "<img class='pixelPic' src='assets/images/spikeR.jpg'>",
            imageComp: "<img class='pixelPic' src='assets/images/spikeL.jpg'>"},

            Respite: {
            name: "Respite", 
            totalHealth: 200,
            currentHealth: 200,
            attack: 4,
            counterAttack: 20,
            // ability heal,
            image: "<img class='pixelPic' src='assets/images/respiteR.jpg'>",
            imageComp: "<img class='pixelPic' src='assets/images/respiteL.jpg'>"},

            Radioactive: {
            name: "Radioactive",
            totalHealth: 250,
            currentHealth: 250,
            attack: 4,
            counterAttack: 25,
            image: "<img class='pixelPic' src='assets/images/rSantaR.png'>",
            imageComp: "<img class='pixelPic' src='assets/images/rSantaL.png'>"}
        },