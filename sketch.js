var database;
var form;
var playercount;
var gamestate = 0;
var player;
var game;
var allplayers;
var car1, car2, car3, car4, cars;

function setup() {
    createCanvas(displayWidth, displayHeight);

    database = firebase.database();
    console.log(database);

    game = new Game();
    game.getgamestate();
    game.start();

}

function draw() {
    background("white");
    if(playercount===4){
      game.updategamestate(1);
    }
    if(gamestate===1){
     game.play();
    }
}
