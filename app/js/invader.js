 var exports = exports || {};

 (function(exports, Bullet) {

     var Invader = function(game, center) {
         this.game = game;
         this.size = {
             x: 15,
             y: 15
         };
         this.center = center;
         this.patrolX = 0;
         this.speedX = 0.3;
     };

     Invader.prototype = {
         update: function() {
             if (this.patrolX < 0 || this.patrolX > 40) {
                 this.speedX = -this.speedX;
             }

             this.center.x += this.speedX;
             this.patrolX += this.speedX;

             if (Math.random() > 0.995 && !this.game.invadersBelow(this)) {
                 var bullet = new Bullet({
                     x: this.center.x,
                     y: this.center.y + this.size.y
                 }, {
                     x: Math.random() - 0.5,
                     y: 2
                 });
                 this.game.addBody(bullet);
             }
         }
     };

     exports.Invader = Invader;

 })(exports, exports.Bullet);