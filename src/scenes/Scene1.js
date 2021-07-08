class Scene1 extends Phaser.Scene {
    constructor() {
        super("Scene1");
    }

    preload() {
 
        // load image
        this.load.image('background', './assets/background.png');
        this.load.image('groundScroll', './assets/ground.png');
        this.load.image('character', './assets/character.png');
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    create() {
        
        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0, 0);
    } 

    update() {
        this.background.tilePositionX -= 5;
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('menuScene');
        }
    }



  }
