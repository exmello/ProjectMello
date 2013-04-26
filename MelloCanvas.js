//namespace: mello
(function (mello, undefined) {
	
    var MAXIMUM_FRAME_DELTA = 160;

	//class: MelloCanvas
	mello.MelloCanvas = function (canvas) {
		var me = this; //self-reference
		this.canvas = canvas;
		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext('2d');
		this.melloGame = new mello.MelloGame(this);
		this.graphics = new mello.Graphics(this, this.melloGame);
		
		//Draw a test rectangle
		this.drawTestRectangle = function(x,y,w,h,i) {
			var c = me.context;
			
			if(i) {
				switch(i) {
					case 0: c.fillStyle = 'red'; break;
					case 1: c.fillStyle = 'orange'; break;
					case 2: c.fillStyle = 'yellow'; break;
					case 3: c.fillStyle = 'green'; break;
					case 4: c.fillStyle = 'blue'; break;
				}
			} else {
				c.fillStyle = 'rgb(200,0,0)';
			}
			
			c.fillRect(x,y,w,h);
		}
		
		//private method: requestAnimFrame
		//TODO: if(window.requestAnimationFrame) requestAnimFrameMethod = window.requestAnimationFrame; etc etc
		// var requestAnimFrame = (function(callback) { return requestAnimFrameMethod; })();
		var requestAnimFrame = (function(callback) {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
			function(callback) {
				window.setTimeout(callback, 1000 / 60);
			};
		})();
		
		var runAnimation = { value: false };
		var lastFrame = +new Date();
		
		//Start Animation
		this.startAnimation = function() {
			runAnimation.value = true;
			setTimeout(animate, 0);
		};
		
		//Stop Animation
		this.stopAnimation = function() {
			runAnimation.value = false;
		};

		//private method: Animation Loop
		var animate = function(lastFrame) {		
		    var now = +new Date(); //new date in milliseconds
		    var deltaT = Math.min(MAXIMUM_FRAME_DELTA, now - lastFrame); //time since last frame within a maximum limit
		    //update
		    me.melloGame.update(deltaT);
			
		    // clear
		    me.context.clearRect(0, 0, this.width, this.height);
			
		    //render
		    me.graphics.render(deltaT);
			
		    //request new frame
		    if(runAnimation.value)
		        requestAnimFrame(function () { return animate(now); });
		};
		
		//Init touch event handler
		this.initTouchEventHandler = function() {
			canvas.addEventListener("touchstart", doTouchStart, false);
		};
		
		//private method: the action to perform on a touch event
		var doTouchStart = function(e) {
			e.preventDefault();
			
			//TODO:record touches into inputData object
			//	inputData will be handled each input frame
			
			//var canvasX = e.targetTouches[0].pageX - e.target.offsetLeft;
			//var canvasY = e.targetTouches[0].pageY - e.target.offsetTop;
			var canvasX = e.changedTouches[0].pageX - e.target.offsetLeft;
			var canvasY = e.changedTouches[0].pageY - e.target.offsetTop;
			var touchId = e.changedTouches[0].identifier
			
			//alert('TOUCH! X: ' + canvasX + ', Y: ' + canvasY);
			me.drawTestRectangle(canvasX, canvasY, 5, 5, touchId);
		};
		
		//Init mouse event handler
		this.initMouseEventHandler = function() {
			canvas.addEventListener("mousedown", doMouseDown, false);
		};
		
		//private method: the action to perform on a mouse click
		var doMouseDown = function(e) {
			var canvasX = event.pageX;
			var canvasY = event.pageY;
			alert('CLICK! X: ' + canvasX + ', Y: ' + canvasY);
		};
		
		this.initTouchEventHandler();
		this.initMouseEventHandler();
		
		//function getTargetTouchOrdinal(changedTouch) {
		//	return 
		//}
	};
	
}(window.mello = window.mello || {}));