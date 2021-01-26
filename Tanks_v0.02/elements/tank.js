class Tank {

  constructor(x, y, z) {

    this.pos = createVector(x, y, z);
     //this.vel = createVector(1, -1);
    // this.vel = p5.Vector.random2D()
    // this.vel.mult(random(0, 3));
    this.vel = createVector();
    this.acc = createVector();
    
    this.ang = createVector(-180,0,0);
    this.acc2 = createVector();
   
    this.rot = createVector();
    this.r = 16;
    tankRadius = this.r;
  
    // this.x = x;
    // this.y = y;

  }



  applyForce(force) {
    this.acc.add(force);
  }


  update() {
    //     let mouse = createVector(mouseX,mouseY);
    //     this.acc = p5.Vector.sub(mouse,this.pos);
    //     this.acc.setMag(0.05);
    // let control = createVector(dirX,0 ,dirY);


    //this.acc = p5.Vector.random2D()
    // this.vel = p5.Vector.sub(mouse,this.pos);
    //this.acc.setMag(0.5);

    if (keyIsDown(101)) {
      this.acc.x = -dirX;
    } else {
      this.vel.x /= 1.1;
    }
    if (keyIsDown(104)) {
      this.acc.x = dirX;
    } else {
      this.vel.x /= 1.1;
    }
    
    if (keyIsDown(104)) {
      this.acc.z = -dirY;
    } else {
      this.vel.z /= 1.1;
    }
    if (keyIsDown(101)) {
      this.acc.z = dirY;
    } else {
      this.vel.z /= 1.1;
    }
      if (keyIsDown(102)) {
    this.acc2.x = 5 }
  else { this.acc2.x = 0}
  if (keyIsDown(100)) {
    this.acc2.x = -5;
  }

   
    
 
    this.vel.limit(10);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0);
    
    
    
    this.rot.limit(500);
    this.ang.add(this.acc2);
    this.rot.add(this.ang);
    this.acc2.set(1);
   
   
    dirX = map(-sin(this.ang.x / 100), 0, 628, 0, 360);
    dirY = map(-cos(this.ang.x / 100), 0, 628, 0, 360);

  }


  edges() {
    if (this.pos.y >= 0) {
      this.pos.y = 0;
      this.vel.y *= -0.5;
    }



  }



  show() {

   push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    rotateY(-this.ang.x / 100);
    
    if (this.pos.x > camX+300)
      {camX = camX - this.vel.x/2.5}
     if (this.pos.x < camX-300)
      {camX = camX - this.vel.x/2.5}
    
     if (this.pos.z > camZ+100)
      {camZ = camZ - this.vel.z/2}
     if (this.pos.z < camZ-100)
      {camZ = camZ - this.vel.z/2}
    
    rotateZ(PI);
    scale(20);
    //box(100);
    noStroke();
    ambientMaterial(100);
    texture(t34Texture);
    model(tankModel);
     pop();

  }
//  collision(w) {
//     let d = dist(this.pos.x, this.pos.z, w.x, w.b);
//     if (d < this.r + w.r) {
//       collision =  true;
//     } else {
//       collision = false;

//     }
//   }

}