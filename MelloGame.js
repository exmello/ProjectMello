//namespace: mello
(function (mello, undefined) {
	
	//class: MelloGame
	mello.MelloGame = function (melloCanvas) {
		var me = this; //self-reference
		this.melloCanvas = melloCanvas;
		this.player = new mello.Player(this);
		this.weapon = new mello.Weapon(this);
		this.level = new mello.Level(this);

		this.init = function() {
		    me.player.init();
            //weapon.init();
            //camera.init();
		}
		
		this.update = function (deltaT) {
		    me.player.update(deltaT);
		    me.weapon.update(deltaT);
            //camera.update(deltaT);
		}
	};
	
}(window.mello = window.mello || {}));