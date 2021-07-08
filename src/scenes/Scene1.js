class Scene1 extends Phaser.Scene {
    constructor() {
        super("Scene1");
    }

    preload() {
 
        // load image
        this.load.image('background', './assets/background.png');
    }

    create() {
        
        // place menu
        this.ground = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0, 0);
        
        // define keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    }

    update() {
        this.ground.tilePositionX -= 5;
    }



  }
