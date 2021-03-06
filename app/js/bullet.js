var Game = Game || {};

Game.Bullet = function() {

    var Bullet = function(center, velocity) {
        this.size = {
            x: 3,
            y: 3
        };
        this.center = center;
        this.velocity = velocity;
    };

    Bullet.prototype = {
        update: function() {
            this.center.x += this.velocity.x;
            this.center.y += this.velocity.y;
        }
    };

    return Bullet;
}();
