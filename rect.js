class Rect{

constructor(x,y,width,height){

var Options = {

'isStatic': true,

}

this.body = Bodies.rectangle(x,y,width,height,Options);
this.width = width;
this.height = height;

World.add(world,this.body);

}

display(){

 var pos = this.body.position;  

fill(random(125.5,255));
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);

}
}