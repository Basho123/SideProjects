class Sky {

  constructor(a) {

    this.a = a;

  }


  show() {


    push();
    rotateZ(PI/2);
    translate(0, 0, 0);
    noStroke();
    texture(this.a);
    sphere(5000, 10, 10);
    noFill();

    pop();
  }

}