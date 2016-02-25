/* libreria */

window.onload = function() {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

    function init() {
        /*init is the very first function called when your State starts up. 
        It's called before preload, create or anything else. 
        If you need to route the game away to another State you could do so here, 
        or if you need to prepare a set of variables or objects before the preloading starts.*/
    }

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

function render() {
    game.debug.spriteInfo(s, 20, 32);

}

    function loadRender ( ) {
        /*loadRender is called during the Loader process. This only happens if you've set one or more assets to load in the preload method. 
        The difference between loadRender and render is that any objects you render in this method you must be sure their assets exist.*/

    }

    function loadUpdate() {
        /* loadUpdate is called during the Loader process. This only happens if you've set one or more assets to load in the preload method.*/
    }

    function paused () {
            /*This method will be called if the core game loop is paused.*/

    }

    function pauseUpdate() {
        /*is called while the game is paused instead of preUpdate, update and postUpdate.*/
    } 

    function preRender() {
        /*The preRender method is called after all Game Objects have been updated, but before any rendering takes place.*/
    }

    function render() {
        /* Nearly all display objects in Phaser render automatically, you don't need to tell them to render. 
        However the render method is called AFTER the game renderer and plugins have rendered, so you're able to do any final post-processing style effects here. 
        Note that this happens before plugins postRender takes place.*/
    }

    function resize() {
        /*If your game is set to Scalemode RESIZE then each time the browser resizes it will call this function, passing in the new width and height.*/
    }

    function resumed() {
        /*This method will be called when the core game loop resumes from a paused state.*/
    }

    function shutdown() {
        /*This method will be called when the State is shutdown (i.e. you switch to another state from this one).*/        
    }

    function update() {
        /*The update method is left empty for your own use. 
        It is called during the core game loop AFTER debug, physics, plugins and the Stage have had their preUpdate methods called. 
        If is called BEFORE Stage, Tweens, Sounds, Input, Physics, Particles and Plugins have had their postUpdate methods called.*/
    }
};