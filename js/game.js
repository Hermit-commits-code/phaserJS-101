// Create a new scene
let gameScene = new Phaser.Scene('Game');

// Pre-Load Assets
gameScene.preload = function () {
  this.load.image('background', 'assets/background.png');
  this.load.image('player', 'assets/player.png');
};

// Create method
gameScene.create = function () {
  // Create background sprite
  let bg = this.add.sprite(0, 0, 'background');

  // Change the origin to the top-left corner
  bg.setOrigin(0, 0);

  // Create the player sprite
  let player = this.add.sprite(50, 180, 'player');

  // Set position of the player
};

// Set the configuration of the game
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not it will use Canvas
  width: 640,
  height: 360,
  scene: gameScene, // Our newly created scene
};
// Create the new game and pass the configuration to it
let game = new Phaser.Game(config);
