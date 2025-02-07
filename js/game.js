// Create a new scene
let gameScene = new Phaser.Scene('Game');

// Pre-Load Assets
gameScene.preload = function(){
  this.load.image('background', 'assets/background.png')
}
// Set the configuration of the game
let config = {
  type: Phaser.AUTO , // Phaser will use WebGL if available, if not it will use Canvas
  width: 640,
  height: 360,
  scene: gameScene // Our newly created scene
}
// Create the new game and pass the configuration to it
let game = new Phaser.Game(config);