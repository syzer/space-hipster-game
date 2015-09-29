// title screen
function Game(game) {
    'use strict';

    return {
        init: init,
        create: create,
        update: update
    };

    function init() {

    }

    function create() {
        // set world dimensions
        game.world.setBounds(0, 0, 1920, 1920);

        // background
        game.background = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'space');

        // create player
        // TODO player checked for the asteroids
        game.player = game.add.sprite(game.world.centerX, game.world.centerY, 'playership');
        game.player.scale.setTo(2);
        game.player.animations.add('fly', [0, 1, 2, 3], 5, true);
        game.player.animations.play('fly');

        // player initial score of zero
        game.playerScore = 0;

        // enable player physics
        game.physics.arcade.enable(game.player);
        game.playerSpeed = 120;
        game.player.body.collideWorldBounds = true;

        // the camera will follow the player in the world
        game.camera.follow(game.player);

        // generate game elements
        generateCollectables();
        generateAsteriods();

        // show score
        showLabels();

        // sounds
        game.explosionSound = game.add.audio('explosion');
        game.collectSound = game.add.audio('collect');
    }

    function update() {
        if (game.input.activePointer.justPressed()) {

            // move on the direction of the input
            game.physics.arcade.moveToPointer(game.player, game.playerSpeed);
        }

        // collision between player and asteroids
        game.physics.arcade.collide(game.player, game.asteroids, hitAsteroid, null, game);

        // overlapping between player and collectables
        game.physics.arcade.overlap(game.player, game.collectables, collect, null, game);

        if (game.isAwesome(game.playerScore)) {
            game.state.start('MainMenu', true, false, game.playerScore);
        }
    }

    function generateCollectables() {
        game.collectables = game.add.group();

        // enable physics in them
        game.collectables.enableBody = true;
        game.collectables.physicsBodyType = Phaser.Physics.ARCADE;

        // phaser's random number generator
        var numCollectables = game.rnd.integerInRange(100, 150);
        var collectable;

        for (var i = 0; i < numCollectables; i++) {
            // add sprite
            collectable = game.collectables.create(game.world.randomX, game.world.randomY, 'power');
            collectable.animations.add('fly', [0, 1, 2, 3], 5, true);
            collectable.animations.play('fly');
        }
    }

    function generateAsteriods() {
        game.asteroids = game.add.group();

        // enable physics in them
        game.asteroids.enableBody = true;

        // phaser's random number generator
        var numAsteroids = game.rnd.integerInRange(150, 200);
        var asteriod;

        for (var i = 0; i < numAsteroids; i++) {
            // add sprite
            asteriod = game.asteroids.create(game.world.randomX, game.world.randomY, 'rock');
            asteriod.scale.setTo(game.rnd.integerInRange(10, 40) / 10);

            // physics properties
            asteriod.body.velocity.x = game.rnd.integerInRange(-20, 20);
            asteriod.body.velocity.y = game.rnd.integerInRange(-20, 20);
            asteriod.body.immovable = true;
            asteriod.body.collideWorldBounds = true;
        }
    }

    function hitAsteroid(player, asteroid) {
        // play explosion sound
        game.explosionSound.play();

        // make the player explode
        var emitter = game.add.emitter(game.player.x, game.player.y, 100);
        emitter.makeParticles('playerParticle');
        emitter.minParticleSpeed.setTo(-200, -200);
        emitter.maxParticleSpeed.setTo(200, 200);
        emitter.gravity = 0;
        emitter.start(true, 1000, null, 100);
        game.player.kill();

        game.time.events.add(800, gameOver, game);
    }

    function gameOver() {
        // pass it the score as a parameter
        game.state.start('MainMenu', true, false, game.playerScore);
    }

    function collect(player, collectable) {
        // play collect sound
        game.collectSound.play();

        // update score
        game.playerScore++;
        game.scoreLabel.text = game.playerScore;

        // remove sprite
        collectable.destroy();
    }

    function showLabels() {
        // score text
        var text = "0";
        var style = {font: "20px Arial", fill: "#fff", align: "center"};
        game.scoreLabel = game.add.text(game.width - 50, game.height - 50, text, style);
        game.scoreLabel.fixedToCamera = true;
    }

}

/*
 TODO
 - audio
 - asteriod bounch
 */
