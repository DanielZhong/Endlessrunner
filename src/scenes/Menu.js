class menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('background', './assets/background.mp3');
        
        // load image
        // this.load.image('menu', './assets/Menu.png');
    }

    create() {
        this.sound.play('background'); //background music

        // place menu
        this.menu = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'menu').setOrigin(0, 0);
        // define keys
        // keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.scene.start('Scene1');
    }

    update() {
        // this.scene.start('Scene1');
    }


  }
