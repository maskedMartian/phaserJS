const config = {
  width: 402,
  height: 400,
  backgroundColor: 0xdda0dd,
  scene: {
    preload,
    create,
    update
  }
}

const game = new Phaser.Game(config)

const gameState = {}


function preload() {
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png')
}


function create() {
  gameState.codey = this.add.sprite(21, 26, 'codey')
  gameState.cursors = this.input.keyboard.createCursorKeys()
}


function update() {
  if (gameState.cursors.down.isDown && gameState.codey.y < 375) {
    gameState.codey.y += 5;
  }
  if (gameState.cursors.up.isDown && gameState.codey.y > 30) {
    gameState.codey.y -= 5;
  }
  if (gameState.cursors.right.isDown && gameState.codey.x < 377) {
    gameState.codey.x += 5;
  }
  if (gameState.cursors.left.isDown && gameState.codey.x > 25) {
    gameState.codey.x -= 5;
  }
}


