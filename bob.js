class bob
{
    constructor(x,y,radius)
    {
        var options =
        {
            isStatic: false,
            density: 0.6,
            restitution: 1.2
        }
        this.body = Bodies.circle(x,y,radius/2.7,options);
        this.radius = radius;
        this.bobDiameter = radius*2;
        World.add(world,this.body);

    }
    
    display(){
        var pos = this.body.position;
        fill("purple");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}