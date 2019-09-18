function Animal(name){
    this.name = name;
}
Animal.prototype.Talk = function(){
    document.writeln("내이름은"+this.name+"야");
}

var monkey= new Animal("원숭이");
var bird= new Animal("새");

monkey.Talk();
bird.Talk();