var Game = Game || {};

Game.Sound = function() {

    var SOUND_ASSETS = {
        SHOOT: 'assets/sounds/shoot.wav'
    };

    function loadFromFile(url) {
        return new Audio(url);
    }

    function play(sound) {
        sound.load();
        sound.play();
    }

    return {
        loadFromFile : loadFromFile,
        play: play,
        SOUND_ASSETS: SOUND_ASSETS
    };
}();