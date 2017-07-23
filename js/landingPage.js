/**
 * Created by nickhoughton on 6/20/17.
 */
var cloudField;
var game, size;
var clouds = [], cloudNames, numClouds = 5;

function main() {
  size = getViewport();
  game = new Phaser.Game(size[0], size[1], Phaser.CANVAS, 'body', null, true);

  game.state.add('mainState', mainState);
  game.state.start('mainState');
}

function addCloud(i, n){
  var x = randomFloat(-game.width, game.width, 0);
  var y = randomFloat(0, game.height, 0);
  var dx = randomFloat(45, 55, 0);
  var sx = randomFloat(0.1, 0.4, 2);
  //var sy = randomFloat(0.1, 0.4, 2);
  clouds[i] = game.add.sprite(0, 0, cloudNames[n]);
  clouds[i].position.y = y;
  clouds[i].position.x = x;
  game.physics.enable(clouds[i], Phaser.Physics.ARCADE);
  clouds[i].body.velocity.x = dx;
  clouds[i].scale.setTo(sx, sx);
  clouds[i].anchor.setTo(0.5,0.5);
  //clouds[i].scale.x *= randomFloat(0, game.height, 0) % 2 === 0 ? -1 : 1;
}

var mainState = {
  preload: function(){
    cloudNames = ['cloud1', 'cloud2', 'cloud3'];
    game.load.image(cloudNames[0], '/images/coud1.png');
    game.load.image(cloudNames[1], '/images/cloud2.png');
    game.load.image(cloudNames[2], '/images/cloud3.png');

  },
  create: function(){
    for(let i = 0; i < numClouds; ++i){
      addCloud(i, randomFloat(0, 2, 0));
    }

  },
  update:function(){
    for(let i = 0; i < numClouds; ++i){
      if(clouds[i].position.x > game.width){
        clouds[i].position.x = -clouds[i].width;
        clouds[i].position.y = randomFloat(0, game.height, 0);
        //clouds[i].scale.x *= randomFloat(0, game.height, 0) % 2 === 0 ? -1 : 1;
      }
    }
  }
}
function highlightContentDiv(){

}
function fadeNight(){
  $("#night").fadeOut(4200);
}
function fadeNightIn(){
  $("#night").fadeOut(0);
  $("#night").fadeIn(4200);
  $("#wrapper").animate({
    color: 'rgb(144, 138, 120)'
  }, 4200);
}
window.onload = fadeNightIn;