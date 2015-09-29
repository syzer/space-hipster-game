var SpaceHipster = SpaceHipster || {};

var config = {
    "width": window.innerWidth,
    "height": window.innerHeight,
    "renderer": Phaser.AUTO,
    //"resolution": window.devicePixelRatio
};

SpaceHipster.game = new Phaser.Game(config);

SpaceHipster.game.state.add('Boot', SpaceHipster.Boot(SpaceHipster.game));
SpaceHipster.game.state.add('Preload', SpaceHipster.Preload(SpaceHipster.game));
SpaceHipster.game.state.add('MainMenu', SpaceHipster.MainMenu(SpaceHipster.game));
SpaceHipster.game.state.add('Game', SpaceHipster.Game(SpaceHipster.game));

SpaceHipster.game.state.start('Boot');