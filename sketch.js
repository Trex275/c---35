var database;
var form;
var playercount;

function setup(){
    createCanvas(500,500);

    database = firebase.database();
    console.log(database);

    form = new Form();
    
}

function draw(){
    background("white");
    form.display();
    drawSprites();
}
