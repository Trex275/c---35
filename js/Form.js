class Form {
    constructor(){
        this.title=createElement('h2');
        this.title.html("Car Racing Game")
        this.name = createInput('Enter Your Name Here')
        this.button = createButton('Play')

    }
    display(){
        this.title.position(550, 150);
        this.name.position(550, 250);
        this.button.position(615, 210);
        this.button.mousePressed(()=>{
            console.log("Working")
        });
    }
}