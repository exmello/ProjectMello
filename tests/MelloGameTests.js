module('MelloGame module', {
    setup: function() {
		
		//need to mock a canvas with the same methods
		this.canvas = function() {
			this.getContext = function() {
			}
		};
			
		this.createMelloGame = function () {
			return new mello.MelloGame(new this.canvas());
		};
    }
});

test('init()', function(assert) {
    //TODO
	this.createMelloGame().init();
	ok(true, 'int() ran successfully');
});

