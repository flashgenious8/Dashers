var Player;
var Form;
var gameState, game;
var playerCount;
var gameState = 0;
var database
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game= new gameStates();
    game.getState();
    game.startState();
    
    
}

function draw(){
    background("white");
   
    
}


