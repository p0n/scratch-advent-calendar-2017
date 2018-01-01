const _ = require('./character.js');

exports.Cat = function(name) {
  this.parent = new _.Character(name); 
  this.hello = function (){return "Mew!! I'm " + this.parent.name + "!!";};
  this.move = function(x,y){return this.parent.move(x,y);}
  this.getX = function (){ return this.parent.getX(); };
  this.getY = function (){ return this.parent.getY(); };
}

