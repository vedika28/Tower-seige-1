class Box {
  constructor(x, y, width, height) {
    var options = {
      isStatic: false,
      restitution: 0.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    color=this.color;
    World.add(world, this.body);

    this.rand=random(210,255);
    this.rand2=random(170,200);
    this.rand3=random(190,220);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
   fill(this.rand,this.rand2,this.rand3);

    push();
    //translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    //image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}