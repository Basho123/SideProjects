function gameCamera(){
  

 ambientLight(255);
              
  
  
camera(0, 0,  0 + (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 250,  650, 0, 1, 0);

  
  translate(camX*3,800+camY*3,300+camZ*3)
  //translate(0,400,-900)
 
  // rotateX(-rotY/500-0.1);
  // rotateY(rotX/500);
  
  
  camX += camXSpeed;
  camY += camYSpeed;
  camZ += camZSpeed;
  rotX += rotXSpeed;
  rotY += rotYSpeed;
  
 
  
  
  
  
  
}