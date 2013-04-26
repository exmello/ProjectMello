module('Player module', {
    setup: function() {
        var me = this;
		//need to mock a game with the same methods
        this.game = function () {
            
            this.level = new mello.Level(this);
            this.level.width = 100;
            this.level.height = 100;
            
        };
			
		this.createPlayer = function () {
			return new mello.Player(new me.game());
		};
    }
});

test('init()', function(assert) {
    //TODO
    var player = this.createPlayer();
    player.init();
    equal(player.pos.x, 50, 'init() placed the player in the middle of the level');
    equal(player.pos.y, 50, 'init() placed the player in the middle of the level');
});

test('update()', function (assert) {
    //TODO
    var player = this.createPlayer();
    player.update();
    ok(true, 'update() called');
});