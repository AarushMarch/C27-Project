class Bob{
    constructor(x, y, r){
        var options={
            isStatic:false,
            restitution:0.3,
            density:0.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world,this.body)

    }
    display(){
        var paperposition = this.body.position;
        push();
        transalate(paperposition.x, paperposition.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255, 0, 255);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}