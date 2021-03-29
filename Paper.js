class Paper{
    constructor(x,y,r){
var options = {
    restitution:1,
    density:1,
    friction:1
}
this.body = Bodies.circle(x,y,r,options)
World.add(world,this.body);
this.radius = r;
this.image = loadImage("sprites/paper.png")
    }
    display(){
        var pos = this.body.position;
        fill("red");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        image(this.image);
    }
}