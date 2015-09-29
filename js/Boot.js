var SpaceHipster = SpaceHipster || {};

//setting game configuration and loading the assets for the loading screen
SpaceHipster.Boot = function (game) {
    'use strict';

    return {
        preload: preload,
        create: create
    };

    function preload() {
        //assets we'll use in the loading screen
        game.load.image('logo', '/assets/images/logo.png');
        game.load.image('preloadbar', '/assets/images/preloader-bar.png');
    }

    function create() {
        // loading screen will have a white background
        game.stage.backgroundColor = '#fff';

        // scaling options
        game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        game.scale.minWidth = 240;
        game.scale.minHeight = 170;
        game.scale.maxWidth = 2880;
        game.scale.maxHeight = 1920;

        // have the game centered horizontally
        game.scale.pageAlignHorizontally = true;

        // screen size will be set automatically
        // DEPRECATED this.scale.setScreenSize(true);

        // physics system for movement
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.state.start('Preload');
    }

};
