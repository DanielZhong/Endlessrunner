class Scene1 extends Phaser.Scene {
    constructor() {
        super("Scene1");
    }

    preload() {
 
        // load image
        this.load.image('background', './assets/background.png');
        this.load.image('road', './assets/road.png');
        this.load.image('character', './assets/character.png');
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    create() {
        this.gamespeed = 3;
        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0, 0);
        this.ground = this.add.tileSprite(0, game.config.height, game.config.width, 26, 'road').setOrigin(0,1);
        this.character = this.physics.add.sprite(0, game.config.height, 'character');
    } 

    update() {
        this.background.tilePositionX += this.gamespeed;
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('Scene1');
        }
    }



  }
