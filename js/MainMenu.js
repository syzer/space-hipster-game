// title screen
function MainMenu(game) {
    'use strict';

    var h1Style = {font: "30pt Arial", fill: "#fff", align: "center"};
    var pStyle = {font: "15pt Arial", fill: "#fff", align: "center"};
    var AWESOME_SCORE = 5;

    return {
        init: init,
        create: create,
        update: update
    };

    function init(score) {
        score = score || 0;
        game.score = score;
        game.highestScore = game.highestScore || 0;
        game.highestScore = Math.max(score, game.highestScore);
        game.isAwesome = isAwesome;
    }

    function create() {
        // show the space tile, repeated
        game.background = game.add.tileSprite(0, 0, game.width, game.height, 'space');

        // give it speed in x
        game.background.autoScroll(-20, 0);

        // start game text
        var text = "Tap to begin";
        var t = game.add.text(game.width / 2, game.height / 2 - 30, text, h1Style);
        t.anchor.set(0.5);

        // highest score
        text = "Highest score: " + game.highestScore;
        var h = game.add.text(game.width / 2, game.height / 2 + 20, text, pStyle);
        h.anchor.set(0.5);

        maybeAddAwesomeSauce(game.score);
    }

    function update() {
        if (game.input.activePointer.justPressed()) {
            game.state.start('Game');
        }
    }

    function maybeAddAwesomeSauce(score) {
        if (!isAwesome(score)) {
            return;
        }
        var text = "You scored: " + score;
        var text2 = "Awesome souce! Much win! \n Facebook worthy epic!";

        var scoreText = game.add.text(game.width / 2, game.height / 2 - 60, text, pStyle);
        scoreText.anchor.set(0.5);

        var awesomeText = game.add.text(game.width / 2, game.height / 2 + 45, text2, h1Style);
        awesomeText.anchor.set(0.5);
    }

    function isAwesome(score) {
        return score >= AWESOME_SCORE;
    }
}