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
        this.ACCELERATION = 1500;
        this.JUMP_VELOCITY = -900;
        this.MAX_JUMPS = 2;
        this.DRAG = 600;
        this.MAX_X_VEL = 500;   // pixels/second
        this.MAX_Y_VEL = 5000;
        this.physics.world.gravity.y = 2600;
        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0, 0);
        this.ground = this.physics.add.sprite(0, game.config.height - 30, 'road').setOrigin(0,0);
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;
        this.character = this.physics.add.sprite(120, 600, 'character').setScale(0.3);
        this.character.setMaxVelocity(this.MAX_X_VEL, this.MAX_Y_VEL);
        this.character.setCollideWorldBounds(true);
        cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.character, this.ground);

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
        // check keyboard input
        if(cursors.left.isDown) {
            this.character.body.setAccelerationX(-this.ACCELERATION);
            this.character.setFlip(true, false);
            //this.character.anims.play('walk', true);
        } else if(cursors.right.isDown) {
            this.character.body.setAccelerationX(this.ACCELERATION);
            this.character.resetFlip();
            //this.alien.anims.play('walk', true);
        } else {
            // set acceleration to 0 so DRAG will take over
            this.character.body.setAccelerationX(0);
            this.character.body.setDragX(this.DRAG);
            //this.alien.anims.play('idle');
        }
        // check if alien is grounded
	    this.character.isGrounded = this.character.body.touching.down;
	    // if so, we have jumps to spare
	    if(this.character.isGrounded) {
	    	this.jumps = this.MAX_JUMPS;
	    	this.jumping = false;
	    } 
        // allow steady velocity change up to a certain key down duration
	    if(this.jumps > 0 && Phaser.Input.Keyboard.DownDuration(cursors.up, 150)) {
	        this.character.body.velocity.y = this.JUMP_VELOCITY;
	        this.jumping = true;
	    }
        // finally, letting go of the UP key subtracts a jump
	    if(this.jumping && Phaser.Input.Keyboard.UpDuration(cursors.up)) {
	    	this.jumps--;
	    	this.jumping = false;
	    }
        /*if(this.checkCollision(this.character, this.block)) {
            this.scene.start('over');
        }
        if (this.checkCollision(this.character, this.block2)) {
            this.scene.start('over');
        }
        if (this.checkCollision(this.p1Rocket, this.block3)) {
            this.scene.start('over');
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
        }*/
        
        
    }
}
