function setup(){
    createCanvas(600,400);
}

function draw(){
    background(50);
    
    //i wrote this so background changes to pink when clicked
    if(mouseIsPressed>200){
        background(255,0,200);   
    }

  //makes outline white, 6px thick, no color inside shapes
  stroke(255);
  strokeWeight(6);
  nofill();
  
 
 //a circle
  ellipse(300,200,100,100);
}  