class box{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world,this.body);
    }
    display(){
  
      push();
      fill("yellow")
       rectMode(CENTER);
      rect( this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
}