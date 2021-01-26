function keyCommands(){



  
  if (keyIsDown(65)) {
    camXSpeed = 5;
      
  }
  else { camXSpeed = 0}
  
  if (keyIsDown(68)) {
    camXSpeed = -5;
  }

  if (keyIsDown(87)) {
    camZSpeed = 5;
  }
  else { camZSpeed = 0}
  if (keyIsDown(83)) {
    camZSpeed = -5;
  }
  
   if (keyIsDown(69)) {
    camYSpeed = 5;
  }
  else { camYSpeed = 0}
  if (keyIsDown(81)) {
    camYSpeed = -5;
  }
  
  
  // if (keyIsDown(101)) {
  //   rotYSpeed = 5;
  // }
  // else { rotYSpeed = 0}
  // if (keyIsDown(104)) {
  //   rotYSpeed = -5;
  // }
  
  //  if (keyIsDown(102)) {
  //   rotXSpeed = 5;
  // }
  // else { rotXSpeed = 0}
  // if (keyIsDown(100)) {
  //   rotXSpeed = -5;
  // }


}