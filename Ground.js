class Ground{
    constructor(x, y, width, height){
        var options={
            isStatic:true,
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        rectMode(CENTER);
        strokeWeight(2);
        stroke("white");
        fill("black");
        rect(this.x, this.y, this.width, this.height);
    }
}