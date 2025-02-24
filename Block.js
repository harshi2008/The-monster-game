class Block{
    constructor(x, y, width, height){
        var options={
            'restitution':0.8
            ,friction:1.0
            ,density:20
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color(random(0, 255), random(0, 255), random(0,255));
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("black");
        fill(this.color);
        rect(0, 0, this.width, this.height);
        pop();
    }
}