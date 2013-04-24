module('MelloCanvas module', {
    setup: function() {
        var canvas, context,
            fixtureEl = document.getElementById('qunit-fixture');
        fixtureEl.innerHTML = '<canvas width="600" height="400"></canvas>';

        canvas = fixtureEl.firstChild;
        try {
            context = canvas.getContext('2d');
        } catch(e) {
            // probably no canvas support, just exit
            return;
        }

        this.canvas = canvas;
        this.context = context;
		
		this.createMelloCanvas = function () {
			return new mello.MelloCanvas(this.canvas);
		};
    }
});

test('drawTestRedRectangle()', function(assert) {
    var mc = this.createMelloCanvas();
	mc.drawTestRectangle(10,10,55,55);
	
	assert.pixelEqual(this.canvas, 10, 10, 200, 0, 0, 255, 'Red rectangle added to canvas');
	assert.pixelEqual(this.canvas, 10 + 54, 10 + 54, 200, 0, 0, 255, 'Red rectangle added to canvas');
});

asyncTest('startAnimation()', function() {
	var mc = this.createMelloCanvas();
	mc.startAnimation();
	ok(true, "startAnimation() called");
	
	mc.stopAnimation();
	start();
});

