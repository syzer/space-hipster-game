var SpaceHipster = SpaceHipster || {};

//loading the game assets
SpaceHipster.Preload = function (game) {
    'use strict';

    return {
        preload: preload,
        create: create
    };

    function preload() {
        //show loading screen
        game.splash = game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        game.splash.anchor.setTo(0.5);

        game.preloadBar = game.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
        game.preloadBar.anchor.setTo(0.5);

        game.load.setPreloadSprite(game.preloadBar);

        //load game assets
        game.load.image('space', 'assets/images/space.png');
        game.load.image('rock', 'assets/images/rock.png');
        game.load.spritesheet('playership', 'assets/images/player.png', 12, 12);
        game.load.spritesheet('power', 'assets/images/power.png', 12, 12);
        game.load.image('playerParticle', 'assets/images/player-particle.png');
        game.load.audio('collect', 'assets/audio/collect.ogg');
        game.load.audio('explosion', 'assets/audio/explosion.ogg');
    }

    function create() {
        setTimeout(function () {
            game.state.start('MainMenu');
        }, 1000);
    }

};
