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
            var name = this.name.value();
            console.log(name);
            this.button.hide();
            this.name.hide();
            this.message.html('Hello ' + name + " ! Welcome to the Game")
            this.message.position(280, 250)
        });
    }
}