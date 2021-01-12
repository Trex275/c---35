class Player {
    constructor() {
        this.index = null;
        this.mame = null;
        this.distance = 0;
    }
    getplayerCount() {
        database.ref('playercount')
            .on("value", (data) => {
                playercount = data.val();
            });
    }
    updateplayercount(count) {
        database.ref('/')
            .update({
                playercount: count
            })

    }
    update() {
        var playerreference = "players/player" + this.index;
        database.ref(playerreference)
            .set({
                name: this.name,
                distance: this.distance
            })
    }
    getplayerinfo() {
        var playerinforef = database.ref('players')
        playerinforef.on("value", (data) => {
            allplayers = data.val
        });
    }

}