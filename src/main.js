let config = {
    type: Phaser.CANVAS,
    width: 1454,
    height: 600,
    scene: [menu, Scene1]
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let keySPACE, keyR;
