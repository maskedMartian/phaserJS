const gameState = {}

function preload() {
  // load our 'incredible' sound here!
  this.load.audio('incredible', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/incredible.mp3')
  this.load.audio('awesome', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/reallyawesome.mp3')

}

function create() {
    // add our 'incredible' sound to our scene here!
    gameState.incredible = this.sound.add('incredible')
    gameState.awesome = this.sound.add('awesome')
  
    // Display "Incredible" and "Really, really awesome" buttons
    gameState.incredibleBox = this.add.rectangle(200, 150, 300, 200, 0xdadaaa)
    gameState.awesomeBox = this.add.rectangle(200, 400, 300, 200, 0xaadada)
    gameState.incredibleText = this.add.text(150, 135, "Incredible", { fill: "#222222", font: "20px Times New Roman"})
    gameState.awesomeText = this.add.text(110, 385, "Really, really awesome", { fill: "#222222", font: "20px Times New Roman"})
    gameState.incredibleBox.setInteractive();
    gameState.awesomeBox.setInteractive();

    // add a 'pointerup' handler to incredibleBox here:
  
    gameState.incredibleBox.on('pointerup', function() {
        gameState.incredible.play()
    })

    gameState.awesomeBox.on('pointerup', function() {
        gameState.awesome.play()
    })
}


const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 600,
    backgroundColor: "#333333",
    scene: {
        preload,
        create
    }
}

const game = new Phaser.Game(config)

/*
Learn Phaser: Basics
Sounds

Games aren’t just idle toys. Many games cultivate experiences, blurring the distinction between a momentary diversion and artwork that you can interact with. To this end, there’s few things that can prop up the player’s immersion like good music and sound design. Since sounds are assets (like sprites and images), we load them in during the preload() function. First let’s handle playing music for a scene, here’s how we’d do that:

const gameState = {};

function preload() {
  this.load.audio('theme', 'assets/music/theme.wav');
}

function create() {
  gameState.music = this.sound.add('theme');
  gameState.music.play();
}

const config = { scene: { preload, create }};
const game = new Phaser.Game(config);

First we load in the our theme song asset in preload(). We provide this.load.audio() with the key 'theme', similar to how we give keys to our visual assets. After the key, we also need to provide this.load.audio() with the path to the asset. Then we put the loaded asset in our scene in our create() function using this.sound.add(). This creates a sound object that we can .play(). We save that sound object as the value for gameState.music and immediately call the .play() method.

We might also want a sound to play whenever a specific action takes place. Let’s say we want a little beep to play when the mouse has been clicked. Here’s how we’d do that:

const gameState = {}

function preload() {
  this.load.audio('chime', 'assets/sounds/chime.wav);
}

function create() {
  gameState.circle = this.add.circle(100, 100, 30, 0xFF0000);
  gameState.circle.setInteractive();

  gameState.chimeSound = this.sound.add('chime');

  gameState.circle.on('pointerup', function() {
    gameState.chimeSound.play();
  });
}

const config = { scene: { preload, create }};
const game = new Phaser.Game(config);

Above, we load in the sound located at assets/sounds/chime.wav and save that sound with the key 'chime'. We then create a circle in our Scene and set it to be interactive. Then we add our 'chime' sound to our Scene. We then add in a new event listener so that when our circle gets clicked, we play our chime sound.
Instructions
1.

There’s already a button that plays the sound of someone saying “Really, really awesome”. Let’s add another button that plays our file of that same mystery person saying “Incredible”.

First load the sound file in preload(). Give the sound a key of 'incredible'. Supply this.load.audio() with this path: 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/incredible.mp3'.
Checkpoint 2 Passed
2.

Now, in create() add our sound by calling this.sound.add() with the key 'incredible'. Save the sound into gameState.incredible.
Checkpoint 3 Passed
3.

Now let’s make it so that when we click this “Incredible” button it says incredible! After incredibleBox is created and then made interactive, create an event handler for the 'pointerup' event.

When the mouse is clicked on incredibleBox, we want to play our incredible sound by calling the .play() method on it!

*/