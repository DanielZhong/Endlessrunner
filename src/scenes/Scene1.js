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
        this.load.image('vblock1', './assets/verticalblock2.png');
        this.load.image('vblock2', './assets/verticalblock3.png');
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    create() {
        this.level = 370;
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
        this.random = Phaser.Math.RND.integerInRange(1, 600);
        if(1 == this.random){
            this.block = this.physics.add.sprite(1500, 660, 'block').setScale(0.5);
            this.block.body.setVelocityX(- this.level);
            
        }
        else if (2 == this.random){
            this.block2 = this.physics.add.sprite(1500, 620, 'vblock1').setScale(0.5);
            this.block2.body.setVelocityX(- this.level);
        }
        else if (3 == this.random){
            this.block3 = this.physics.add.sprite(1500, 585, 'vblock2').setScale(0.5);
            this.block3.body.setVelocityX(- this.level);
        }
        
        if(this.checkCollision(this.character, this.block)) {
            this.block.reset();
        }
        if (this.checkCollision(this.character, this.block2)) {
            this.block2.reset();
        }
        if (this.checkCollision(this.p1Rocket, this.block3)) {
            this.block3.reset();
        }
        
        checkCollision(character, block) {
            if (character.x < block.x + block.width && 
                character.x + character.width > block.x && 
                character.y < block.y + block.height &&
                character.height + character.y > block. y) {
                    return true;
            } 
            else {
                return false;
            }
        }
        
        
    }
}
