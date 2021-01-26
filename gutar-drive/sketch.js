let drive;

let inputEQ;

let outputEQ;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
 // mic = new p5.Noise();
  mic = new p5.AudioIn();
      
  inputEQ = new p5.HighPass()
  
  drive = new p5.Distortion(1);
  
  outputEQ = new p5.EQ();
  
  cabSim = new p5.LowPass();
   
  

  mic.start();
  mic.disconnect()
  mic.connect(inputEQ);
  
   
  inputEQ.disconnect();
  inputEQ.connect(drive);
  
  drive.disconnect();
  drive.connect(cabSim);
  
  
  outputEQ.bands[0].freq(2500);
  outputEQ.bands[0].gain(0);
 // outputEQ.process(drive);
  outputEQ.connect(cabSim);
  
  cabSim.freq(2500);
  cabSim.res(10);

  
  //mic.getLevel();
  
  
  
  
}
function draw() {
  background(220);
  
   
  
  
  rect (100,windowHeight,100,-mic.getLevel(0.45)*1000)

  
}

        
