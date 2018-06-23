(function(){
	
	// Instaciamento do "jogo"
		var game = new Phaser.Game(800,600,Phaser.AUTO,null,{preload:preload,create:create,update:update});
		var platforms, player;
		
	// carregamento de recursos
	function preload() {
		game.load.image('sky','img/sky.png');
		game.load.image('platform','img/platform.png');
		
		game.load.spritesheet('dude','img/dude.png',32,48);
	}

	// criação dos elementos do jogo(no contexto do jogo)
	function create() {
		game.add.sprite(0,0,'sky');

		platforms = game.add.group();
		
		var platform = platforms.create(0, game.world.height - 64, 'platform');
			platform.scale.setTo(2,2);
			
			platform = platforms.create(400, 400, 'platform');
			
			platform = platforms.create(-150, 250, 'platform');
			
		player = game.add.sprite(50, game.world.height - 150, 'dude');
	}

	// regras do jogos
	function update() {

	}




})();