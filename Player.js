//namespace: mello
(function (mello, undefined) {

    //class: Player
    mello.Player = function (melloGame) {
        var me = this; //self-reference
        this.melloGame = melloGame;
        this.pos = { x: 0, y: 0 };

        this.init = function () {
            //place player in the center of the level
            me.pos.x = me.melloGame.level.width / 2;
            me.pos.y = me.melloGame.level.height / 2;
        };

        this.update = function (deltaT) {

        };

    };
}(window.mello = window.mello || {}));