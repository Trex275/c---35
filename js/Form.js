class Form {
    constructor(){
        this.title=createElement('h2');
        this.title.html("Car Racing Game")
        this.name = createInput('Enter Your Name Here')
        this.button = createButton('Play')
        this.message = createElement('h1')

    }
    display(){
        this.title.position(550, 150);
        this.name.position(550, 250);
        this.button.position(615, 210);
        this.button.mousePressed(()=>{
            player.name = this.name.value();
            playercount = playercount + 1;
            player.index = playercount;
            player.update();
            player.updateplayercount(playercount);
            console.log(name);
            this.button.hide();
            this.name.hide();
            this.message.html('Hello ' + player.name + " ! Welcome to the Game")
            this.message.position(280, 250)
        });
    }
    hide(){
        this.message.hide();
    }
}