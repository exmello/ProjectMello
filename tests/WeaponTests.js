module('Player module', {
    setup: function() {
        var me = this;
		//need to mock a game with the same methods
        this.game = function () {
                                    
        };
			
		this.createWeapon = function () {
			return new mello.Weapon(new me.game());
		};
    }
});

test('init()', function(assert) {
    //TODO
    var weapon = this.createWeapon();
    weapon.init();
    ok(true, 'init() called');
});

test('update()', function (assert) {
    //TODO
    var weapon = this.createWeapon();
    weapon.update();
    ok(true, 'update() called');
});