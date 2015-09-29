var SpaceHipster = SpaceHipster || {};

// title screen
SpaceHipster.MainMenu = function mainMenu(game) {
    'use strict';

    return {
        init: init,
        create: create,
        update: update
    };

    function init(score) {
        score = score || 0;
        game.highestScore = game.highestScore || 0;
        game.highestScore = Math.max(score, game.highestScore);
    }

    function create() {

        // show the space tile, repeated
        game.background = game.add.tileSprite(0, 0, game.width, game.height, 'space');

        // give it speed in x
        game.background.autoScroll(-20, 0);

        // start game text
        var text = "Tap to begin";
        var style = {font: "30pt Arial", fill: "#fff", align: "center"};
        var t = game.add.text(game.width / 2, game.height / 2, text, style);
        t.anchor.set(0.5);

        // highest score
        text = "Highest score: " + game.highestScore;
        style = {font: "15pt Arial", fill: "#fff", align: "center"};

        var h = game.add.text(game.width / 2, game.height / 2 + 50, text, style);
        h.anchor.set(0.5);
    }

    function update() {
        if (game.input.activePointer.justPressed()) {
            game.state.start('Game');
        }
    }

};