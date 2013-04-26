module('MelloGame module', {
    setup: function() {
        var me = this;
		//need to mock a canvas with the same methods
		this.canvas = function() {
		    this.getContext = function () {
		    };
		};
			
		this.createMelloGame = function () {
			return new mello.MelloGame(new me.canvas());
		};
    }
});

test('init()', function(assert) {
    //TODO
    var game = this.createMelloGame();
    game.init();
	ok(true, 'int() ran successfully');
});

