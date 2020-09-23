function preload() {
    // Load in the background image here!
    this.load.image('sky', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/sky.jpg');
    // Load in the sprite here!
    this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}

function create() {
    // Put the background image in the scene here!
    this.add.image(200, 230, 'sky');
    // Create a sprite game object here!
    this.add.sprite(100, 100, 'codey');
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#5f2a55",
    scene: {
        create,
        preload
	}
}

const game = new Phaser.Game(config);