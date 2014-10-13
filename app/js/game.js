var exports = exports || {};

(function(KeyBoarder, Invader, Player, Bullet) {
    'use strict';

    var Game = function(canvasId) {
        var canvas = document.getElementById(canvasId);
        var screen = canvas.getContext('2d');
        var gameSize = {
            x: canvas.width,
            y: canvas.height
        };

        this.bodies = createInvaders(this).concat([new Player(this, gameSize, new KeyBoarder())]);
        var self = this;
        loadSound("assets/sounds/shoot.wav", function(shootSound) {
            self.shootSound = shootSound;
           
            var tick = function() {
                self.update();
                self.draw(screen, gameSize);
                requestAnimationFrame(tick);
            };

            tick();
        });
    };

    Game.prototype = {
        update: function() {

            var bodies = this.bodies;
            var notCollidingWithOtherBody = function(b1) {
                return bodies.filter(function(b2) {
                    return colliding(b1, b2);
                }).length === 0;
            };

            this.bodies = this.bodies.filter(notCollidingWithOtherBody);
            for (var i = this.bodies.length - 1; i >= 0; i--) {
                this.bodies[i].update();
            }
        },

        draw: function(screen, gameSize) {
            screen.clearRect(0, 0, gameSize.x, gameSize.y);
            for (var i = this.bodies.length - 1; i >= 0; i--) {
                drawRect(screen, this.bodies[i]);
            }
        },

        addBody: function(body) {
            this.bodies.push(body);
        },

        invadersBelow: function(invader) {
            return this.bodies.filter(function(body) {
                return body instanceof Invader &&
                    body.center.y > invader.center.y &&
                    body.center.x - invader.center.x < invader.size.x;
            }).length > 0;
        }
    };

    var createInvaders = function(game) {
        var invaders = [];
        for (var i = 0; i < 24; i++) {
            var x = 30 + (i % 8) * 30;
            var y = 30 + (i % 3) * 30;
            invaders.push(new Invader(game, {
                x: x,
                y: y
            }));
        }
        return invaders;
    };

    var drawRect = function(screen, body) {
        screen.fillRect(body.center.x - body.size.x / 2,
            body.center.y - body.size.y / 2,
            body.size.x, body.size.y);
    };

    var colliding = function(body1, body2) {
        return !(body1 === body2 ||
            body1.center.x + body1.size.x / 2 < body2.center.x - body2.size.x / 2 ||
            body1.center.x - body1.size.x / 2 > body2.center.x + body2.size.x / 2 ||
            body1.center.y + body1.size.y / 2 < body2.center.y - body2.size.y / 2 ||
            body1.center.y - body1.size.y / 2 > body2.center.y + body2.size.y / 2
        );
    };

    var loadSound = function(url, callback) {
        var loaded = function() {
            callback(sound);
            sound.removeEventListener('canplaythrough', loaded);
        };
        var sound = new Audio(url);
        sound.addEventListener('canplaythrough', loaded);
        sound.load();
    };

    window.onload = function() {
        new Game("screen");
    };

})(exports.KeyBoarder, exports.Invader, exports.Player, exports.Bullet);