function wallX(a = 200, b = 0, c = 0, d = brick, e = PI / 2) {

  //   a = number of slices
  //   b = horizontal pos
  //   c = vertical pos
  //   d = material
  //   e = rotation

  a = a * brickSlices


  for (let i = 0; i < a; i += 200) {
    let w = new Walls(i - b, c, d, e);
    walls.push(w);
   
    // w.show();
    // w.collision(pTank);
  }

  
  
  
}