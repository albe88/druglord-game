window.onload = function() {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });


    function preload () {
        /*preload is called first. Normally you'd use this to load your game assets (or those needed for the current State) 
        You shouldn't create any objects in this method that require assets that you're also loading in this method, as they won't yet be available.*/
        
        //game.load.image('logo', 'images/phaser.png');
        
        //personaggi
        game.load.spritesheet('man', 'sprites/man.png', 37, 45, 18);

        //ambiente
        game.load.tilemap ()

        //elementi UI
        game.load.bottoni
    }

    function create () {

        //metto in scena gli oggetti
        
        //var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        //logo.anchor.setTo(0.5, 0.5);

        //per creare le differenti animazioni 
        var sprite = game.add.sprite(100,100,'Cuadro');

        sprite.frame = 0;// or any number up to 15 to access a specific frame

        or,

        sprite.animations.add('walkLeft', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1, true);
        sprite.animations.add('walkRight', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1, true);

        sprite.play('walkLeft');// plays all the frames, at 1 frame per second, looping.


    }
/**************************************/ 
// move a sprite

/*
var s;

function create() {

    s = game.add.sprite(game.world.centerX, game.world.centerY, 'bot');
    s.anchor.setTo(0.5, 0.5);
    s.scale.setTo(2, 2);

    s.animations.add('run');
    s.animations.play('run', 10, true);

}

function update() {

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        s.x -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        s.x += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        s.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        s.y += 4;
    }

}
///////******************************************/
};