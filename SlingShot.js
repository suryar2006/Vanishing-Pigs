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
    }
    display() {
        //line(this.pointB.x, this.pointB.y, this.bodyA.position.x, this.bodyA.position.y);   
    }
    fly() {
        this.slingShot.bodyA = null;
  //   this.slingShot.pointA=null
     console.log('I am flying')
 }
}