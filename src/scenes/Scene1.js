class Scene1 extends Phaser.Scene {
    constructor() {
        super("Scene1");
    }

    preload() {
 
        // load image
        this.load.image('background', './assets/background.png');
        this.load.image('road', './assets/road.png');
        this.load.image('character', './assets/character.png');
        this.load.image('block', './assets/block.png');
        this.load.image('hblock1', './assets/horizonalblock2.png');
        this.load.image('hblock2', './assets/horizonalblock3.png');
        this.load.image('vblock1', './assets/verticalblock2.png');
        this.load.image('vblock2', './assets/verticalblock3.png');
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    create() {
        this.level = 70;
        this.gamespeed = 3;
        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0, 0);
        this.ground = this.add.tileSprite(0, game.config.height, game.config.width, 26, 'road').setOrigin(0,1);
        this.character = this.physics.add.sprite(120, 630, 'character').setScale(0.3);

        

    } 
  

    update() {
        this.background.tilePositionX += this.gamespeed;
        this.ground.tilePositionX += this.gamespeed;
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('Scene1');
        }
        if(1 == Phaser.Math.RND.integerInRange(1, 80)){
            this.block = this.physics.add.sprite(1000, 660, 'block').setScale(0.5);
            this.block.body.setVelocityX(- this.level);
            // this.cloud02 = this.physics.add.sprite(200, 200, 'block').setScale(0.5);
            // this.cloud02.body.setVelocityX(-45);
        }
        
        
        
    }



  }
