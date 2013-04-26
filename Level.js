//namespace: mello
(function (mello, undefined) {

    //class: Level
    mello.Level = function (melloGame) {
        var me = this; //self-reference
        this.melloGame = melloGame;
        this.width = 0;
        this.height = 0;

        this.init = function () {
            me.width = melloGame.melloCanvas.width;
            me.height = melloGame.melloCanvas.height;
        };

    };
}(window.mello = window.mello || {}));