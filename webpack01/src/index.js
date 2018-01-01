const c = require('./cat.js');
const d = require('./dog.js');

var chara = {};
chara = new c.Cat("Tama");
chara.move(1,2);
console.log(chara.hello());
console.log("x:"+chara.getX() + " ,y:" + chara.getY());

chara = new d.Dog("Pochi");
chara.move(2,3);
console.log(chara.hello());
console.log("x:"+chara.getX() + " ,y:" + chara.getY());

