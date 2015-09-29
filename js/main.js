var SpaceHipster = SpaceHipster || {};

var config = {
    "width": window.innerWidth,
    "height": window.innerHeight,
    "renderer": Phaser.AUTO,
    //"resolution": window.devicePixelRatio
};

SpaceHipster.game = new Phaser.Game(config);

SpaceHipster.game.state.add('Boot', Boot(SpaceHipster.game));
SpaceHipster.game.state.add('Preload', Preload(SpaceHipster.game));
SpaceHipster.game.state.add('MainMenu', MainMenu(SpaceHipster.game));
SpaceHipster.game.state.add('Game', Game(SpaceHipster.game));

SpaceHipster.game.state.start('Boot');