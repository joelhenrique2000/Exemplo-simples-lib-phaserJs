(function(){
	
	// Instaciamento do "jogo"
		var game = new Phaser.Game(800,600,Phaser.AUTO,null,{preload:preload,create:create,update:update});
		var platforms;
		
	// carregamento de recursos
	function preload() {
		game.load.image('sky','img/sky.png');
		game.load.image('platform','img/platform.png');
	}

	// criação dos elementos do jogo(no contexto do jogo)
	function create() {
		game.add.sprite(0,0,'sky');

		platforms = game.add.group();
		
		var platform = platforms.create(0, game.world.height - 64, 'platform');
			platform.scale.setTo(2,2);
	}

	// regras do jogos
	function update() {

	}




})();