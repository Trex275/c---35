var database;
var form;
var playercount;
var gamestate = 0;
var player;
var game;
var allplayers;

function setup() {
    createCanvas(500, 500);

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
