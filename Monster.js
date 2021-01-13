class Monster{
    constructor(x, y, radius){
        var options={
            frictionAir:1,
            density: 1,
        }

        this.image = loadImage("images/Monster-01.png");
        this.radius = radius;
        this.body = Bodies.circle(x, y, (this.radius)/2, options);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius); 
        pop();
        }
}