class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/background.mp3');
        
        // load image
        // this.load.image('menu', './assets/Menu.png');
    }

    create() {
        
        // place menu
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'menu').setOrigin(0, 0);
        // define keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    }

    update() {
      }
    }


  }
