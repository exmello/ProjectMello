//namespace: mello
(function (mello, undefined) {
	
	//class: MelloGame
	mello.MelloGame = function (canvas) {
		var me = this; //self-reference
		
		//Draw a test rectangle
		this.init = function() {
			me.canvas = canvas;
			me.context = canvas.getContext('2d');
		}
		
	};
	
}(window.mello = window.mello || {}));