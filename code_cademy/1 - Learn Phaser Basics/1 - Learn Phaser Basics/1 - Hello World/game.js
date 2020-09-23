function create() {
    // Change "Codey's Adventures\n  in Code World" to the name of your game
    this.add.text(50, 100, "The maskedMartian's Adventures\n in Space", { font: "40px Times New Roman", fill: "#ffa0d0"});

    // Change "by Codecademy" to your name!
    this.add.text(130, 300, "by The maskedMartian", { font: "20px Times New Roman", fill: "#ffa0d0"});
}

const config = {
    type: Phaser.AUTO,
    width: 1100,
	height: 600,
	backgroundColor: "#5f2a55",
	scene: {
    create
	}
};

const game = new Phaser.Game(config);
