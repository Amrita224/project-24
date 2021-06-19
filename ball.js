class ball {
    constructr(x, y) {
        var opt = {
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }
        this.body = Bodies.circle(x, y, 20, 20, opt);
        this.width = 20;
        this.height = 20;
        World.add(world, this.body);
    }
    display () {

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("red");
        ellipse(this.body.x,this.body.y, 20, 20);
        pop();

       

    }

}