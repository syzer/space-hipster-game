var SpaceHipster = SpaceHipster || {};

SpaceHipster.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

SpaceHipster.game.state.add('Boot', SpaceHipster.Boot(SpaceHipster.game));
SpaceHipster.game.state.add('Preload', SpaceHipster.Preload(SpaceHipster.game));
SpaceHipster.game.state.add('MainMenu', SpaceHipster.MainMenu(SpaceHipster.game));
SpaceHipster.game.state.add('Game', SpaceHipster.Game(SpaceHipster.game));

SpaceHipster.game.state.start('Boot');