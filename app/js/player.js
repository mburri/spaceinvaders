var exports = exports || {};

(function(exports, Bullet) {

    var Player = function(game, gameSize, keyboarder) {
        this.game = game;

        this.size = {
            x: 15,
            y: 15
        };

        this.center = {
            x: gameSize.x / 2,
            y: gameSize.y - this.size.x
        };

        this.keyboarder = keyboarder;
    };

    Player.prototype = {
        update: function() {

            if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
                this.center.x -= 2;
            } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
                this.center.x += 2;
            }
            if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE)) {
                var bullet = new Bullet({
                    x: this.center.x,
                    y: this.center.y - this.size.y
                }, {
                    x: 0,
                    y: -6
                });
                this.game.addBody(bullet);
                this.game.shootSound.load();
                this.game.shootSound.play();
            }
        }
    };

    exports.Player = Player;
})(exports, exports.Bullet);