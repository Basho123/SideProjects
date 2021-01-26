class Walls {

  constructor(x,z,a, b = 0) {

   this.x = -x;
    this.z = z;
    this.y = b;
    this.r = 15;
    
    
    this.a = a;
    this.b = b;

  }


  show() {


    push();
    //rotateZ(PI/2);
    translate(this.x, 0, this.z);
    rotateY(this.y);
    noStroke();
    ambientMaterial(0);
    texture(this.a);
    box(10,100,200);
    noFill();
    pop();
  }

   collision(pTank) {
    let d = dist(this.x, this.z, pTank.pos.x, pTank.pos.z);
    if (d < this.r + pTank.r) {
      collision =  true;
    } else {
      collision = false;

    }
  }
  
}