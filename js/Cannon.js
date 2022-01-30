class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonImg = loadImage("./assets/canon.png");
    this.cannonBaseImg = loadImage("./assets/cannonBase.png");  
  }
  
  show(){
    push()
    imageMode(CENTER);
    image(this.cannonImg,this.x,this.y,this.width,this.height,this.angle);
    pop()
  
  noFill();
  push()
  imageMode(CENTER);
  image(this.cannonBaseImg,170,150,200,200);
  pop()
}
}
