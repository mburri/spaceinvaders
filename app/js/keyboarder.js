 var exports = exports || {};

 (function(exports) {
     var KeyBoarder = function() {
         var keyState = {};

         window.onkeydown = function(event) {
             keyState[event.keyCode] = true;
         };

         window.onkeyup = function(event) {
             keyState[event.keyCode] = false;
         };

         this.isDown = function(keyCode) {
             return keyState[keyCode] === true;
         };

         this.KEYS = {
             LEFT: 37,
             RIGHT: 39,
             SPACE: 32
         };
     };

     exports.KeyBoarder = KeyBoarder;
 })(exports);