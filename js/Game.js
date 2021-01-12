class Game {
    constructor() {

    }

    getgamestate() {
        database.ref('gamestate')
            .on("value", (data) => {
                gamestate = data.val();
            });
    }

    async start() {
        if (gamestate == 0) {
            player = new Player();
            var playercountref = await database.ref('playercount').once("value")
            if(playercountref.exists()){
                playercount = playercountref.val()
                player.getplayerCount();
            }
            form = new Form();
            form.display();
        }
    }

    play() {
     form.hide();
    }

    end() {

    }


}