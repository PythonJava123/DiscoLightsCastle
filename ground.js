class Ground{

constructor(x,y,width,height){

var groundOptions = {

isStatic: true


}

this.bodies = Bodies.rectangle(x,y,width,height,groundOptions);
this.width = width;
this.height = height;

World.add(world,this.body);



}
display(){

 var pos = this.body.position;   

fill("red")
rectMode(CENTER);
rec(position.x, position.y, this.width, this.height);

}
}