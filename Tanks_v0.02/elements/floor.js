function terrain(){
  background(200,240,255);
    
 
  //clear();
   push()
 translate(0,0,0)
 
  
  rotateX(PI/2);
  ambientMaterial(0);
  texture(sand1);
  noStroke();
  plane(width*5,height*5);
  
  //console.log(frameCount);
  
  pop();
//   
}