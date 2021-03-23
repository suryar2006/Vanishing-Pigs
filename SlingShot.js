class SlingShot{
    constructor(bodyA,point){
        var options  =  {
            bodyA:  bodyA,
            pointB:  point,
            stiffness:  0.04,
            length:  10
        };
        this.bodyA = bodyA;
        this.pointB  =  point;
        this.slingShot  =  Matter.Constraint.create(options);
        World.add(world,  this.slingShot);
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")

    }
    display() {
        strokeWeight(4)
        push();
        stroke(48, 22, 5);
        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);
        
        if (this.bodyA.position.x < 220) { 
            line(this.pointB.x - 10, this.pointB.y, this.bodyA.position.x - 20, this.bodyA.position.y);
            line(this.pointB.x + 30, this.pointB.y, this.bodyA.position.x - 20, this.bodyA.position.y);
            
            image(this.sling3, this.bodyA.position.x -30, this.bodyA.position.y - 10,15,30);            
        } else {
              line(this.pointB.x - 10, this.pointB.y, this.bodyA.position.x +25, this.bodyA.position.y);
            line(this.pointB.x + 30, this.pointB.y, this.bodyA.position.x  +  25, this.bodyA.position.y);

            image(this.sling3, this.bodyA.position.x + 25, this.bodyA.position.y - 10,15, 30);
        }

        
                pop();
    }
    fly() {
        this.slingShot.bodyA = null;
  //   this.slingShot.pointA=null
     console.log('I am flying')
 }
}