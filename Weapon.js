//namespace: mello
(function (mello, undefined) {

    //class: Weapon
    mello.Weapon = function (melloGame) {
        var me = this; //self-reference
        this.melloGame = melloGame;
        this.gameObjects = new Array();
        this.timeSinceLastShot = 0;

        var SHOT_COOLDOWN = 200; //delta before another shot can be fired.
        var MAX_GAME_OBJECTS = 3; //maximum objects to track
        var BULLET_SPEED = 5;

        this.init = function () {

        };

        this.update = function (deltaT) {
            me.timeSinceLastShot += deltaT;
            if (me.timeSinceLastShot > SHOT_COOLDOWN) {
                var bullet = new mello.GameObject();
                bullet.pos = { x: me.melloGame.player.pos.x, y: me.melloGame.player.pos.y };

                var destX = 400, destY = 400;
                var dX = destX - bullet.pos.x;
                var dY = destY - bullet.pos.y; 
                var length = Math.sqrt(dX * dX + dY * dY);
                var vX = (dX / length) * BULLET_SPEED;
                var vY = (dY / length) * BULLET_SPEED;
                bullet.vector = { x: vX, y: vY };

                me.gameObjects.push(bullet); //add to end of collection
            }

            if (me.gameObjects.length > MAX_GAME_OBJECTS)
                me.gameObjects.shift(); //drop first item in collection

            for (var i = 0; i < me.gameObjects.length; i++) {
                //me.gameObjects[i].update();
                var bullet = me.gameObjects[i];
                bullet.pos.x += bullet.vector.x;
                bullet.pos.y += bullet.vector.y;

                //test bounds
                if (bullet.pos.x > me.melloGame.level.width ||
                    bullet.pos.x < 0 ||
                    bullet.pos.y > me.melloGame.level.height ||
                    bullet.pos.y < 0) {
                    me.gameObjects.shift(bullet);
                }
                
            }
        };
    };
}(window.mello = window.mello || {}));