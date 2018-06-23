(function(){
	
	// Instaciamento do "jogo"
		var game = new Phaser.Game(800,600,Phaser.AUTO,null,{preload:preload,create:create,update:update});

	// carregamento de recursos
	function preload() {
		game.load.image('sky','img/sky.png');
		game.load.image('platform','img/platform.png');
	}

	// criação dos elementos do jogo(no contexto do jogo)
	function create() {
		game.add.sprite(0,0,'sky');
	}

	// regras do jogos
	function update() {

	}




})();